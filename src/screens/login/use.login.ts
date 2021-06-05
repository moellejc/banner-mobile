import { useState } from "react";
import { FieldError } from "../../graphql/generator/FabricGQLTypes";
import { Services } from "../../services";
interface IUseLoginResponse {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  validate: () => boolean;
  login: () => Promise<boolean>;
  loading: boolean;
  errors: FieldError[] | null;
}

let isValid = (email: string, password: string): boolean => {
  return email && password ? true : false;
};

export const useLogin = (): [string, string, IUseLoginResponse] => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FieldError[] | null>(null);

  // submit login info
  const handleSubmit = async (): Promise<boolean> => {
    // set loading while loginning in
    setIsLoading(true);

    let [res, errors] = await Services.AuthService.login(email, password);

    if (errors) {
      console.log("Errors Found:");
      console.log(errors);
      setErrors(errors);
    }

    setIsLoading(false);

    return res;
  };

  return [
    email,
    password,
    {
      setEmail,
      setPassword,
      validate: () => isValid(email, password),
      login: handleSubmit,
      loading: isLoading,
      errors,
    },
  ];
};
