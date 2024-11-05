"use client";

import React from 'react'
import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold,PiCaretRightBold } from "react-icons/pi";
function WorkSlideBtn({containerStyle,btnStyle,iconStyles}) {
    const swiper=useSwiper();

  return (
    <div className={containerStyle}>
      <button className={btnStyle} onClick={()=>swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles}/>
      </button>
      <button className={btnStyle} onClick={()=>swiper.slideNext()}>
        <PiCaretRightBold className={iconStyles}/>
      </button>
    </div>
  )
}

export default WorkSlideBtn
