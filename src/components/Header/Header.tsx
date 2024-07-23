"use client"
import { cartType } from '@/utils/types';
import Link from 'next/link';
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useStore } from 'zustand';

const Header = () => {

  // const cart = useStore((cart) => state.cart)
    
return (
    <div className='bg-black text-white'>
      <Link href={'/products'}>
        <h1 className='text-2xl ps-8 pt-6'>E-comp</h1>
        </Link>
        <div className='text-center flex-row h-40'>
        <a>Products</a> -
        <a> Purchase history</a>
        </div>
        <div className='absolute top-4 right-4'>
          <Link href={'/cart-details'}>
        <FaShoppingCart size={70}/>
        </Link>
        {/* <p>{cart}</p> */}
        </div>
    </div>
  )
}

export default Header;