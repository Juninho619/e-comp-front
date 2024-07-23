"use client"
import { useStoreCart } from '@/services/store'
import React from 'react'

const CartView = () => {
  const cart = useStoreCart((state) => state.cart)
  function displayCart(){
    console.log(cart);
  }
  displayCart();
  return (
    <div className='w-94 border-gray-500 border-2px'>
      {cart.map((element) => (
        <div>
        <p key={element.id}>{element.product_model}</p>
        <p>{element.product_brand}</p>
        <p>{element.category}</p>
        </div>
      ))}
    </div>
  )
}

export default CartView;