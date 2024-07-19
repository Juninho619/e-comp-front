
import { cartType } from '@/utils/types';
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useStore } from 'zustand';

const Header = () => {

  function cartCounter(){
    const cart = useStore<cartType>((state) => state.cart)
    return <p>{cart}</p>
  }
  
return (
    <div className='bg-black text-white'>
        <h1 className='text-2xl ps-8 pt-6'>E-comp</h1>
        <div className='text-center flex-row h-40'>
        <a>Products</a> -
        <a> Purchase history</a>
        </div>
        <div className='absolute top-4 right-4'>
        <FaShoppingCart size={70}/>
        </div>
    </div>
  )
}

export default Header;