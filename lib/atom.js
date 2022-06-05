import { atom } from "recoil";

export const navState = atom({
  key: "navState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
