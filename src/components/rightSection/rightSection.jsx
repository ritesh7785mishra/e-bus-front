import { ReactNode } from "react";
import "./rightSection.css";

export const RightSection = ({ children }) => {
	return (
		<div className="right-section border w-2/6 h-screen p-4 flex-1 overflow-y-auto">
			{children}
		</div>
	);
};
