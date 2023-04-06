import { atom } from "recoil";

export const authComponent = atom<boolean>({
  key: "authState",
  default: false,
});
