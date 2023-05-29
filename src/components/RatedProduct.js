import React from 'react'
import HeadingLeft from './HeadingLeft'
import RatedProductItem from './RatedProductItem'
import FlashSaleOne from '../images/FlashSale/FlashSaleOne.jpg'
import FlashSaleTwo from '../images/FlashSale/FlashSaleTwo.jpg'
import FlashSaleThree from '../images/FlashSale/FlashSaleThree.jpg'
import FlashSaleFour from '../images/FlashSale/FlashSaleFour.jpg'
export default function RatedProduct({title,img}) {
  return (
    <div className='container mx-auto'>
        <HeadingLeft title={"Rated Product"}/>
        <div className="flex justify-between gap-x-4">
          <RatedProductItem img={FlashSaleOne}/>
          <RatedProductItem img={FlashSaleOne}/>
          <RatedProductItem img={FlashSaleOne}/>
          <RatedProductItem img={FlashSaleOne}/>
        </div>
    </div>
  )
}
