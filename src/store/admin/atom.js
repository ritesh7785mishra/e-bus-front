import { atom } from "recoil";

export const currentAdmin = atom({
	key: "currentAdmin", // unique ID (with respect to other atoms/selectors)
	default: {}, // default value (aka initial value)
});
