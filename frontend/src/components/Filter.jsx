import React  from 'react'



//icon
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Filter = () => {

  return (
    <button className='filter shape_outline h7 rg' >Filter <MdOutlineKeyboardArrowDown size={24} className='icon'/></button>
  )
}

export default Filter