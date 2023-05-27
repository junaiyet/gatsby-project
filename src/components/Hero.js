import React from 'react'
import Slider from "react-slick";
import {Link} from 'gatsby'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerOne from "../images/banner-img-one.jpg";
import BannerTwo from "../images/banner-img-two.jpg";
import BannerThree from "../images/banner-img-three.jpg";
import BannerFour from "../images/banner-img-four.jpg";
import {IoIosArrowForward,IoIosArrowBack} from "react-icons/io"
export default function Hero() {
    const settings = {
        arrows:true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <IoIosArrowForward />,
        prevArrow: <IoIosArrowBack  />,
      };
  return (
    <div className='container mx-auto  hero-area'>
        <Slider {...settings}>
          <div >
            <Link className='width: 100%;display: inline-block; h-96 rounded-[32px] truncate'>
            <img className='rounded-[32px]' src={BannerOne} alt="" />
            </Link>
          </div>
          
          <div >
            <Link className='width: 100%;display: inline-block; h-96 rounded-[32px] truncate'>
            <img className='rounded-[32px]' src={BannerTwo} alt="" />
            </Link>
          </div>
          
          <div >
            <Link className='width: 100%;display: inline-block; h-96 rounded-[32px] truncate'>
            <img className='rounded-[32px]' src={BannerThree} alt="" />
            </Link>
          </div>
          
          <div >
            <Link className='width: 100%;display: inline-block; h-96 rounded-[32px] truncate'>
            <img className='rounded-[32px]' src={BannerFour} alt="" />
            </Link>
          </div>
          
       </Slider>

    </div>
  )
}
