import React, { useState } from 'react'

//icon
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Sort = () => {
  const [sortMethod, setSortMethod] = useState("Popular")

  return (
    <button className='sort shape_outline h7 rg' >Sort by: {sortMethod} <MdOutlineKeyboardArrowDown size={24} className='icon'/></button>
  )
}

export default Sort