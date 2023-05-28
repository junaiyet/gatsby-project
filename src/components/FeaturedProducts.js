import React from 'react'
import Heading from './Heading'
import SubHeading from './SubHeading'
import FeatureProductLeft from '../images/FeatureProductLeft.jpg'
import FeatureProductRightOne from '../images/FeatureProductRightOne.jpg'
import FeatureProductRightTwo from '../images/FeatureProductRightTwo.jpg'
import { Link } from 'gatsby'

export default function FeaturedProducts() {
  return (
    <div className='container mx-auto'>
          <Heading  title={'Featured Products'}/>
        <SubHeading subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. "}/>

        <div className="flex justify-between gap-x-14">
            <div className="w-1/2 	 overflow-hidden p-12 px-32 border border-old-gray rounded-xl text-center ">
                <h4 className='text-4xl	'>Wireless Microphone</h4>
                <p className='text-old-gray text-2xl'>$29.99 <span className='inline-block text-primary'>- $19.99</span></p>
               <div className="w-[500px] h-[400px] py-9	">
                <img src={FeatureProductLeft} className='w-full h-full' alt="" />
               </div>
               <div className="flex">
               <div className="flex gap-x-4 justify-between">
                    <div className="border border-old-gray rounded-xl h-32	w-32 items-center flex justify-center flex-col	">
                        <strong className='text-4xl	font-bold text-primary pb-2'>2</strong>
                        <span className='block text-lg text-black '>Houre</span>
                    </div>
                    <div className="border border-old-gray rounded-xl h-32	w-32 items-center flex justify-center flex-col	">
                        <strong className='text-4xl	font-bold text-primary pb-2'>16</strong>
                        <span className='block text-lg text-black '>Minutes</span>
                    </div>
                    <div className="border border-old-gray rounded-xl h-32	w-32 items-center flex justify-center flex-col	">
                        <strong className='text-4xl	font-bold text-primary pb-2'>27</strong>
                        <span className='block text-lg text-black '>Seconds</span>
                    </div>
               </div>

               </div>
            </div>
            <div className="w-1/2 ">
               <div className="pb-4 border border-old-gray rounded-xl h-80 mb-14 overflow-hidden	">
                    <div className="flex gap-x-8 items-center">
                        <div className="img h-80 w-1/2">
                            <img className='h-full object-cover	' src={FeatureProductRightOne} alt="" />
                        </div>
                        <div className="w-1/2 pe-9">
                        <div className="">
                            <Link className='bg-primary text-white px-9 py-3 rounded-md mb-9 inline-block'>Limited Offer</Link>
                            <h5 className='text-2xl	text-black'>Smart Watch New Series</h5>
                            <p className='text-old-gray text-2xl pb-5	'>$29.99 <span className='inline-block text-primary'>- $19.99</span></p>
                        </div>
                        <div className="flex gap-x-4 justify-between">
                    <div className="border border-old-gray rounded-xl h-20	w-20 items-center flex justify-center flex-col	">
                        <strong className='text-2xl	font-bold text-primary '>2</strong>
                        <span className='block text-lg text-black '>Houre</span>
                    </div>
                    <div className="border border-old-gray rounded-xl h-20	w-20 items-center flex justify-center flex-col	">
                        <strong className='text-2xl	font-bold text-primary '>16</strong>
                        <span className='block text-lg text-black '>Minutes</span>
                    </div>
                    <div className="border border-old-gray rounded-xl h-20	w-20 items-center flex justify-center flex-col	">
                        <strong className='text-2xl	font-bold text-primary '>27</strong>
                        <span className='block text-lg text-black '>Seconds</span>
                    </div>
                       </div>
              
                       </div>
                    </div>
               </div>
               <div className=" border border-old-gray rounded-xl h-80  overflow-hidden	">
                    <div className="flex gap-x-8 items-center">
                        <div className="img h-80 w-1/2">
                            <img className='h-full object-cover	' src={FeatureProductRightTwo} alt="" />
                        </div>
                        <div className="w-1/2 pe-9">
                        <div className="">
                            <Link className='bg-primary text-white px-9 py-3 rounded-md mb-9 inline-block'>Limited Offer</Link>
                            <h5 className='text-2xl	text-black'>Smart Watch New Series</h5>
                            <p className='text-old-gray text-2xl pb-5	'>$29.99 <span className='inline-block text-primary'>- $19.99</span></p>
                        </div>
                        <div className="flex gap-x-4 justify-between">
                    <div className="border border-old-gray rounded-xl h-20	w-20 items-center flex justify-center flex-col	">
                        <strong className='text-2xl	font-bold text-primary '>2</strong>
                        <span className='block text-lg text-black '>Houre</span>
                    </div>
                    <div className="border border-old-gray rounded-xl h-20	w-20 items-center flex justify-center flex-col	">
                        <strong className='text-2xl	font-bold text-primary '>16</strong>
                        <span className='block text-lg text-black '>Minutes</span>
                    </div>
                    <div className="border border-old-gray rounded-xl h-20	w-20 items-center flex justify-center flex-col	">
                        <strong className='text-2xl	font-bold text-primary '>27</strong>
                        <span className='block text-lg text-black '>Seconds</span>
                    </div>
                       </div>
              
                       </div>
                    </div>
               </div>
              
            

            </div>
        </div>
    </div>
  )
}
