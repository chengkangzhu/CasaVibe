import React, { useRef, useEffect } from "react";

//icons
import { MdOutlineKeyboardArrowRight} from "react-icons/md";
import { MdOutlineKeyboardArrowLeft} from "react-icons/md";


const ProductCarousel = ({ h2, children }) => {
  const containerRef = useRef(null);
  const buttonRightRef = useRef(null);
  const buttonLeftRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const buttonRight = buttonRightRef.current;
    const buttonLeft = buttonLeftRef.current;


    buttonRight.onclick = function () { 
      container.scrollTo({
        left: container.scrollLeft + container.clientWidth * 0.8,
        behavior: 'smooth'
      });
    };

    buttonLeft.onclick = function () {
      container.scrollTo({
        left: container.scrollLeft - container.clientWidth * 0.8,
        behavior: 'smooth'
      });
    };
  }, []);

  return (
    <div className="product_carousel">
      <h2 className="h2 sb">{h2}</h2>
      <div className="products_container" ref={containerRef}> {children} </div>
      <div className="hide_scrollbar"></div>
      <button ref={buttonLeftRef} className="left"><MdOutlineKeyboardArrowLeft size={24} className="icon"/></button>
      <button ref={buttonRightRef} className="right"><MdOutlineKeyboardArrowRight size={24}   className="icon"/></button>
    </div>
  );
};

export default ProductCarousel;
