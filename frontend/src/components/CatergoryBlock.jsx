import React from 'react'

const CatergoryBlock = ({imageSrc, name}) => {
  return (
    <a href="#" className='catergory_block'>
        <img src={imageSrc} alt="mirror"  />
        <h6 className="h6 md">{name}</h6>
    </a>
  )
}

export default CatergoryBlock