import { atom } from "recoil";

export const authComponent = atom<boolean>({
  key: "authState",
  default: false,
});

export const authPendingComponent = atom<boolean>({
  key: "isAuthPending",
  default: false,
});

export const authJWTKeyComponent = atom<string>({
  key: "jwt-token",
  default: undefined,
});
