import { atom } from "recoil";

export const currentConductor = atom({
	key: "currentConductor", // unique ID (with respect to other atoms/selectors)
	default: {}, // default value (aka initial value)
});
