import React from 'react'

export default function FlashSaleItem({img}) {
  return (
    <div className='border overflow-hidden border-gray rounded-xl relative'>
     <div className="item ">
        <div className=" img h-96 w-[512px] relative" >
           <img className='h-full w-full ' src={img} alt="" />
          <span className='inline-block bg-primary rounded-md absolute top-[20px] right-[160px] w-[120px] h-[48px] flex items-center justify-center text-white uppercase text-sm'  >20% OFF</span>
        </div>
        <div className=" text-center px-8">
            <p className='text-2xl pt-8 pb-2'>Wireless Headphone</p>
            <span className='inline-block text-2xl pb-4 text-primary font-medium'>$29.99</span>
            <div className="flex justify-between">
                <p>Available: 10 </p>
                <p>Sold: 5</p>

            </div>
            <input type="range" name="range" class="w-full h-2 bg-red-100 " />


        </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-0 hover:opacity-100	transition duration-150 cursor-pointer	">
            <div className="relative">
            <h3 className='pt-12 text-center text-4xl font-semibold	 text-white'>Up to 30% Off!</h3>
             <div className="absolute top-[440px] left-[50%] translate-x-[-50%]">
            <div className="flex gap-x-4 justify-between  ">
                    <div className="border border-old-gray rounded-xl h-20	w-20 items-center flex justify-center flex-col	">
                        <strong className='text-2xl	font-bold text-white '>2</strong>
                        <span className='block text-lg text-white '>Houre</span>
                    </div>
                    <div className="border border-old-gray rounded-xl h-20	w-20 items-center flex justify-center flex-col	">
                        <strong className='text-2xl	font-bold text-white '>16</strong>
                        <span className='block text-lg text-white '>Minutes</span>
                    </div>
                    <div className="border border-old-gray rounded-xl h-20	w-20 items-center flex justify-center flex-col	">
                        <strong className='text-2xl	font-bold text-white '>27</strong>
                        <span className='block text-lg text-white '>Seconds</span>
                    </div>
                       </div>

             </div>
            </div>
        </div>
    </div>
  )
}
