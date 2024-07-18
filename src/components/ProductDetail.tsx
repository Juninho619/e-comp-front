'use client'
import { getProductById } from '@/services/getProducts';
import { productProps } from '@/utils/types'
import React, { useEffect, useState } from 'react'

const ProductDetail = ({id}: {id: string}) => {
    const [productDetail, setProductDetail] = useState<productProps[]>([])
    const [productBrand, setProductBrand] = useState('')
    const [productModel, setProductModel] = useState('')
    const [category, setCategory] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [stock, setStock] = useState(0)

    useEffect(() => {
        getProductById(id)
        .then((res) => {
        console.log(res.data);
        const products = res.data
        console.log(res.data.product);
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
        <div className='pl-6'>
        <p>{productBrand}</p>
        <p>{productModel}</p>
        <p>{category}</p>
        <p>{quantity}</p>
        <p>stock: {stock}</p>
        <button className='bg-emerald-600 px-4 rounded-md'>Add to cart</button>
        </div>
    </div>
 )
}

export default ProductDetail