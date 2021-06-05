import * as AuthService from "./auth.service";
import * as MeService from "./me.service";
import * as TokenService from "./token.service";

// restore state for various services from secure storage
export const restore = async () => {
  await TokenService.restore();
};

export const Services = {
  AuthService,
  MeService,
  TokenService,
  restore,
};
