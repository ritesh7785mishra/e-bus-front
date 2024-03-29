import { selector } from "recoil";

export const charCountState = selector({
	key: "charCountState", // unique ID (with respect to other atoms/selectors)
	get: ({ get }) => {
		const text = get(textState);

		return text.length;
	},
});
