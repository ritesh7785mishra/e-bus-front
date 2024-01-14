import "./leftSection.css";

export const LeftSection = ({ children }) => {
	return (
		<div className="left-section border  w-4/6 h-screen border-r-zinc-700 p-4 ">
			{children}
		</div>
	);
};
