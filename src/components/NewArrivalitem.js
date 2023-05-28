import React from 'react'

export default function NewArrivalitem({img,arrivalProductName,arrivalProductPrice,badge}) {
  return (
    <div className='arraivalItem border overflow-hidden	 border-gray rounded-xl'>
        <div className="item ">
        <div className="img h-96 w-[512px] relative" >
           <img className='h-full w-full' src={img} alt="" />
          <span className='inline-block bg-primary rounded-full absolute top-[30px] right-[40px] w-16 h-16 flex items-center justify-center text-white uppercase text-lg' d >{badge}</span>
        </div>
        <div className="arraival-details text-center">
            <p className='text-2xl pt-8 pb-2'>{arrivalProductName}</p>
            <span className='inline-block text-2xl pb-8 text-primary font-medium	'>{arrivalProductPrice}</span>
        </div>
        </div>
    </div>
  )
}
