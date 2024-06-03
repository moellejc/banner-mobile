// fix typing issue with React Navigation v6
// https://spin.atomicobject.com/2023/05/10/not-assignable-parameter-never/

import { NavigationProp, ParamListBase } from "@react-navigation/native";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {}
  }
}

export function useNavigation<T extends NavigationProp>(): T;
