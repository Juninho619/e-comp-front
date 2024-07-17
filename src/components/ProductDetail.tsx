'use client'
import { getProductById } from '@/services/getProducts';
import { productProps } from '@/utils/types'
import React, { useEffect, useState } from 'react'

const ProductDetail = ({id}: {id: string}) => {
    const [productDetail, setProductDetail] = useState<productProps[]>()
    
    useEffect(() => {
		const getData = async () => {
			const response = await getProductById;
			setProductDetail(response.data);
		};
		getData();
	}, []);
    
  return (
    <div className='bg-white h-full'>
        {productDetail && productDetail.map((element: productProps) =>{
            return(
                <div className='border-2 border-gray-600 w-full rounded-md px-8' key={element.id}>
                    <p>{element.product_brand}</p>
                    <p>{element.category}</p>
                    <p>{element.product_model}</p>
                    <p>{element.price}€</p>
                    <p>stock: {element.stock}</p>
                    <button className='bg-emerald-600 px-4 rounded-md'>Add to cart</button>
                </div>
                )
            }
        ) 
    }
 </div>
)
}
    
    

export default ProductDetail