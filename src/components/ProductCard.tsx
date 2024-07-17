"use client"
import { getAllProducts } from '@/services/getProducts';
import { productProps } from '@/utils/types'
import React, { useEffect, useState } from 'react'

const ProductCard = () => {
    const [productList, setProductList] = useState<productProps[]>()

    useEffect(() => {
		const getData = async () => {
			const response = await getAllProducts;
			setProductList(response.data);
		};
		getData();
	}, []);
 
	return (
		<div className="flex flex-col justify-between items-center bg-white h-screen">
			<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				{productList &&
					productList.map((element: productProps) => {
					return(
                    <div className='border-2 border-gray-600 w-48 rounded-md px-8'>
                        <p>{element.product_brand}</p>
                        <p>{element.category}</p>
                        <p>{element.product_model}</p>
                        <p>{element.price}€</p>
                        <p>stock: {element.stock}</p>
                        <button className='bg-indigo-600'>See more</button>
                    </div>
                    )
                }
            ) 
        }
        </div>
    </div>
)
}
            
       



export default ProductCard;