import React from 'react'

//icons
import { MdOutlineKeyboardArrowRight} from "react-icons/md";


const Breadcrumb = () => {
  return (
    <nav className='breadcrumb h8 md'>
        <a href="#">home</a>
        <MdOutlineKeyboardArrowRight size={16} />
        <a href="#">workspace</a>
        <MdOutlineKeyboardArrowRight  size={16} />
        <a href="#">home workspace</a>
        <MdOutlineKeyboardArrowRight size={16}  />
        <a href="#">home work Chair</a>
    </nav>
  )
}

export default Breadcrumb