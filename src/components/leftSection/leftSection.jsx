import "./leftSection.css";

export const LeftSection = ({ children }) => {
	return (
		<div className="left-section w-4/6 h-screen  p-4 overflow-scroll scrollbar-hide">
			{children}
		</div>
	);
};
