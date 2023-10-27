import React, { useState } from "react";


//icon
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

//component
import PopupMenu from "./PopupMenu";

const ContactPopup = () => {
	const [showMenu, setShowMenu] = useState(false);
    
	return (
		<div className="cart_popup" onMouseEnter={()=>setShowMenu(true)} onMouseLeave={()=>setShowMenu(false)}>
			<div>
				Contact{" "}
				<MdOutlineKeyboardArrowDown size={16} className="icon" />
			</div>
            <PopupMenu showMenu={showMenu} className="contact_menu">
                <a href="tel:+00331594720"><span onClick={() => setShowMenu(false)}>(00) 33 159 4720</span></a>
                <a href="mailto:hello@CasaVibe.com"><span onClick={() => setShowMenu(false)}>hello@CasaVibe.com</span> </a>
            </PopupMenu>
		</div>
	);
};

export default ContactPopup;
