import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div  className='bg-black text-white'>
        <h1 className='text-2xl ps-8 pt-6'>E-comp</h1>
        <div className='text-center flex-row h-40'>
        <a>Products</a> -
        <a> My purchases</a>
        </div>
        <div className='absolute top-0 right-0'>
        <FaShoppingCart size={70}/>
        </div>
    </div>
  )
}

export default Header