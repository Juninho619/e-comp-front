'use client'
import { getProductById } from '@/services/getProducts';
import { useStoreCart } from '@/services/store';
import { productProps } from '@/utils/types'
import React, { useEffect, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';

const ProductDetail = ({id}: {id: string}) => {
    const [productDetail, setProductDetail] = useState<productProps[]>([])
    const [productBrand, setProductBrand] = useState('')
    const [productModel, setProductModel] = useState('')
    const [category, setCategory] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [stock, setStock] = useState(0)

    const {addToCart} = useStoreCart(((state)=>state))

    const [quantitytoBuy, setQuantityToBuy] = useState(1)

    function increaseQuantitytoBuy(){
        if(quantitytoBuy < stock)
        setQuantityToBuy(quantitytoBuy + 1)
    }

    function decreaseQuantityToBuy(){
        if(quantitytoBuy > 1)
        setQuantityToBuy(quantitytoBuy - 1)
    }

    function resetQuantityToBuy(){
        setQuantityToBuy(1)
    }

    useEffect(() => {
        getProductById(id)
        .then((res) => {
        const products = res.data
        setProductBrand(res.data.product_brand)
        setProductModel(res.data.product_model)
        setQuantity(res.data.quantity)
        setStock(res.data.stock)
        setCategory(res.data.category)
        setProductDetail(products)
        })
        .catch((e) => {
          console.log(e);
        });
    }, []);
 return (
    <div className='bg-white h-96'>
        <div className='pl-6 text-5xl'><h2>{productBrand}</h2>
        <p>{productModel}</p>
        <p>{category}</p>
        <p>{quantity}</p>
        <p>stock: {stock}</p>
        <div className='flex content-center'>
        <FaPlus onClick={increaseQuantitytoBuy}/>
        <p onClick={resetQuantityToBuy}>Reset</p>
        <FaMinus onClick={decreaseQuantityToBuy}/>
        </div>
        <div className='flex content-center'>
        <p className='px-24'>{quantitytoBuy}</p>
        </div>
        <button className='bg-emerald-600 px-4 rounded-md' onClick={()=>addToCart}>Add to cart</button>
        </div>
    </div>
 )
}

export default ProductDetail