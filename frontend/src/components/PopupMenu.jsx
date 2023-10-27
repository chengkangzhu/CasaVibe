

const PopupMenu = ({ showMenu, children, className }) => {
	return (
		<div className={`popup_menu shadow_300 h7 rg ${showMenu ? "show" : ""} ${className}`}>
			{children}
		</div>
	);
};

export default PopupMenu;
