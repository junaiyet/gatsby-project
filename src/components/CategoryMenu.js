import React from 'react'
import Laptop from '../images/icons/Laptop.svg'
import Smartphone from '../images/icons/Smartphone.svg'
import Camera from '../images/icons/Camera.svg'
import TvAndRemote from '../images/icons/TvAndRemote.svg'
import HomeAppliance from '../images/icons/HomeAppliance.svg'
import Accessories from '../images/icons/Accessories.svg'
import OtherCategories from '../images/icons/Accessories.svg'
export default function CategoryMenu() {
  return (
    <div className='container mx-auto'>
         <h2 className='text-3xl text-old-gray font-semibold pt-20 pb-8	'>Category</h2>
         <div className="flex justify-between gap-x-4">
            <div className="item flex items-center px-4 py-1 rounded border border-solid border-[#A7A7A7]">
                <img src={Laptop} alt="" className='mr-2' />
                <span className='text-lg inline-block'>Computer & Laptop</span>
            </div>
            <div className="item flex items-center px-4 py-1 rounded border border-solid border-[#A7A7A7]">
                <img src={Laptop} alt="" className='mr-2' />
                <span className='text-lg inline-block'>Mobile & Tablet</span>
            </div>
            <div className="item flex items-center px-4 py-1 rounded border border-solid border-[#A7A7A7]">
                <img src={Laptop} alt="" className='mr-2' />
                <span className='text-lg inline-block'>Camera</span>
            </div>
            <div className="item flex items-center px-4 py-1 rounded border border-solid border-[#A7A7A7]">
                <img src={Laptop} alt="" className='mr-2' />
                <span className='text-lg inline-block'>TV & Smart Box</span>
            </div>
            <div className="item flex items-center px-4 py-1 rounded border border-solid border-[#A7A7A7]">
                <img src={Laptop} alt="" className='mr-2' />
                <span className='text-lg inline-block'>Home Appliance</span>
            </div>
            <div className="item flex items-center px-4 py-1 rounded border border-solid border-[#A7A7A7]">
                <img src={Laptop} alt="" className='mr-2' />
                <span className='text-lg inline-block'>Accessories</span>
            </div>
            <div className="item flex items-center px-4 py-1 rounded border border-solid border-[#A7A7A7]">
                <img src={Laptop} alt="" className='mr-2' />
                <span className='text-lg inline-block'>Other Categories</span>
            </div>
         
         </div>
    </div>
  )
}
