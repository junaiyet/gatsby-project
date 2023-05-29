import React from 'react'
import HeadingLeft from './HeadingLeft'
import FlashSaleItem from './FlashSaleItem'
import FlashSaleOne from '../images/FlashSale/FlashSaleOne.jpg'
import FlashSaleTwo from '../images/FlashSale/FlashSaleTwo.jpg'
import FlashSaleThree from '../images/FlashSale/FlashSaleThree.jpg'
import FlashSaleFour from '../images/FlashSale/FlashSaleFour.jpg'


export default function FlashSale({title,img}) {
  return (
    <div className='container mx-auto'>
       <HeadingLeft title={"Flash Sale"}/>
       <div className="flex justify-between gap-x-4">
        <FlashSaleItem img={FlashSaleOne}/>
        <FlashSaleItem img={FlashSaleTwo}/>
        <FlashSaleItem img={FlashSaleThree}/>
        <FlashSaleItem img={FlashSaleFour}/>
       </div>
    </div>
  )
}
