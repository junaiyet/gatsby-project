import React from 'react'
import {Link} from 'gatsby'
import { AiOutlineInstagram,AiFillFacebook,AiOutlineTwitter,AiFillLinkedin,AiOutlineShoppingCart } from 'react-icons/ai';
import {FiPhoneCall,FiSearch} from "react-icons/fi"
import {TbMessage2,TbGridDots} from "react-icons/tb"
import {MdMessage} from "react-icons/md"
import Logo from "../images/logo.png"

export default  function Header() {
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
                    <Link href="callto:+12 345 6789 0" className='font-re'>+12 345 6789 0</Link>
                    </div>
                    <div className="flex items-center	">
                    <TbMessage2 className='text-primary mr-2'/>
                    <Link href="mailto:support@tronix.com" className='font-re'>support@tronix.com</Link>
                    </div>
                </div>
            </div>
        
    </div>
    </div>
       <div className="container mx-auto py-4 ">
       <div className="flex justify-between items-center">
               <div className="logo">
                <img src={Logo} alt="logo" />
               </div>
               <div className="flex items-center">
                <div className="">
                <div className="bg-gray p-4 rounded-xl mr-4">
                <TbGridDots className='text-xl'/>
                </div>
                {/* <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul> */}

                </div>
                <div className="search flex relative items-center">
                    <input type="text" className='w-[648px] bg-gray h-12  rounded-xl pl-3' placeholder='Search here' />
                    <FiSearch className='absolute top-0 right-0 bg-primary h-full w-[48px] text-xs p-2 text-white rounded-r-lg'/>
                </div>
               </div>
               <div className="content flex items-center gap-x-8">
                    <div className="flex items-center relative">
                    <AiOutlineShoppingCart className='text-3xl'/>
                    <div className="badge absolute w-[24px] h-[24px] rounded-full bg-primary text-center text-white right-[-10px] top-[-10px] ">99</div>
                    </div>
                    <div className="">
                        <MdMessage className='text-3xl'/>
                    </div>
                    <div className="">
                        <Link href='#'  className='btn h-[60px] rounded-[8px] w-[149px] inline-block text-center leading-[60px] text-primary text-lg'>Sign In</Link>
                        <Link  href='#'  className='btn bg-primary h-[60px] rounded-[8px] w-[149px] inline-block text-center leading-[60px] text-white text-lg'>Sign Up</Link>
                    </div>
               </div>
            </div>

            <div className="menu flex justify-center py-9">
                <ul className='flex gap-x-8'>
                    <li className='inline-block'><Link>Home</Link></li>
                    <li className='inline-block'><Link>About</Link></li>
                    <li className='inline-block'><Link>Product</Link></li>
                    <li className='inline-block'><Link>Blog</Link></li>
                    <li className='inline-block'><Link>Contact</Link></li>
                </ul>
            </div>
       </div>
    </div>
  )
}

