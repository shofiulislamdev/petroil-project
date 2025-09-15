import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sliderOne from "../../assets/sliderOne.png"
import sliderTwo from "../../assets/sliderTwo.png"
import sliderThree from "../../assets/sliderThree.png"
import sliderFour from "../../assets/sliderFour.png"

const ImageSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
    };
    return (
        <div>
            <Slider {...settings}>
                <img className='px-[15px]' src={sliderOne} alt="" />
                <img className='px-[15px]' src={sliderTwo} alt="" />
                <img className='px-[15px]' src={sliderThree} alt="" />
                <img className='px-[15px]' src={sliderFour} alt="" />
                <img className='px-[15px]' src={sliderTwo} alt="" />


            </Slider>
        </div>
    )
}

export default ImageSlider