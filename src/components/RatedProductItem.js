import React from 'react'

export default function RatedProductItem({img}) {
  return (
<div className='border overflow-hidden border-gray rounded-xl relative'>
     <div className="item ">
        <div className=" img h-96  p-8 overflow-hidden  " >
           <img className='h-full w-full rounded-xl' src={img} alt="" />
        
        </div>
        <div className=" text-center px-8">
            <p className='text-2xl pt-8 pb-2'>Wireless Headphone</p>
            <span className='inline-block text-2xl pb-4 text-primary font-medium'>$29.99</span>
           


        </div>
        </div>
  
    </div>
  )
}
