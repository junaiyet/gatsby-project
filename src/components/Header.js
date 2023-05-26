import React from 'react'
import { AiOutlineInstagram,AiFillFacebook,AiOutlineTwitter,AiFillLinkedin,AiOutlineShoppingCart } from 'react-icons/ai';
import {FiPhoneCall,FiSearch} from "react-icons/fi"
import {TbMessage2,TbGridDots} from "react-icons/tb"
import {MdMessage} from "react-icons/md"
import Logo from "../images/logo.png"

function Header() {
  return (
    <div className="">

    <div className=" border border-solid border-[#A7A7A7]">
    <div className='container mx-auto '>
            <div className="flex justify-between py-4 ">
                <div className="flex gap-x-9	">
                <AiOutlineInstagram className='text-old-gray text-lg'/>
                <AiFillFacebook className='text-old-gray text-lg'/>
                <AiOutlineTwitter className='text-old-gray text-lg'/>
                <AiFillLinkedin className='text-old-gray text-lg'/>
                </div>
                <div className="flex ">
                    <div className="flex items-center mr-4">
                    <FiPhoneCall className='text-primary mr-2'/>
                    <a href="callto:+12 345 6789 0" className='font-re'>+12 345 6789 0</a>
                    </div>
                    <div className="flex items-center	">
                    <TbMessage2 className='text-primary mr-2'/>
                    <a href="mailto:support@tronix.com" className='font-re'>support@tronix.com</a>
                    </div>
                </div>
            </div>
        
    </div>
    </div>
       <div className="container mx-auto py-4 ">
       <div className="flex justify-between">
               <div className="logo">
                <img src={Logo} alt="logo" />
               </div>
               <div className="flex items-center">
                <TbGridDots/>
                <div className="search flex relative items-center">
                    <input type="text" className='w-[648px] bg-gray h-12  rounded-xl' />
                    <FiSearch className='absolute top-0 right-0'/>
                </div>
               </div>
               <div className="content flex">
                    <div className="flex items-center">
                    <AiOutlineShoppingCart/>
                    <div className="badge">0</div>
                    </div>
                    <div className="">
                        <MdMessage/>
                    </div>
                    <div className="">
                        <a href="" className='btn btn-primary'>Sign In</a>
                        <a href="" className='btn btn-primary'>Sign Up</a>
                    </div>
               </div>
            </div>
       </div>
    </div>
  )
}

export default Header