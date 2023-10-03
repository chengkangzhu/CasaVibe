import React from 'react'

//icons
import { MdOutlineKeyboardArrowRight} from "react-icons/md";


const Breadcrumb = () => {
  return (
    <nav className='breadcrumb h8 md'>
        <span >home</span>
        <MdOutlineKeyboardArrowRight size={16} />
        <span >workspace</span>
        <MdOutlineKeyboardArrowRight  size={16} />
        <span >home workspace</span>
        <MdOutlineKeyboardArrowRight size={16}  />
        <span >home work Chair</span>
    </nav>
  )
}

export default Breadcrumb