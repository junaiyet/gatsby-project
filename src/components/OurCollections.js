import React from 'react'
import Heading from './Heading'
import SubHeading from './SubHeading'
import OurCollectionsOne from '../images/OurCollectionsOne.jpg'
import OurCollectionsTwo from '../images/OurCollectionsTwo.jpg'

export default function OurCollections() {
  return (
    <div className='container mx-auto'>
              <Heading  title={'Our Collections'}/>
        <SubHeading subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. "}/>
        <div className="flex gap-x-4 justify-between gap-x-8">
            <div className="rounded-xl overflow-hidden	w-2/4">
                <div className="bg-gray relative">
                    <div className="img">
                        <img className='w-full'  src={OurCollectionsOne} alt="" />
                    </div>
                    <div className="absolute bg-white rounded-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-8 text-center w-[450px]">
                        <h4 className='text-4xl text-black font-bold pb-4'>PC Gaming Collection</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl overflow-hidden	w-2/4">
                <div className="bg-gray relative">
                    <div className="img">
                        <img className='w-full'  src={OurCollectionsTwo} alt="" />
                    </div>
                    <div className="absolute bg-white rounded-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-8 text-center w-[450px]">
                        <h4 className='text-4xl text-black font-bold pb-4'>Camera Collection</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                    </div>
                </div>
            </div>
     
          
        </div>
    </div>
  )
}
