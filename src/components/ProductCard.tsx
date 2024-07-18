"use client"
import { getAllProducts } from '@/services/getProducts';
import { productProps } from '@/utils/types'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const ProductCard = () => {

  const [productList, setProductList] = useState<productProps[]>()
  
    useEffect(() => {
		getAllProducts()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
 
	return (
		<div className="flex flex-col justify-between items-center bg-white h-screen">
			<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				{productList &&
					productList.map((element) => {
            return(
                    <div className='border-2 border-gray-600 w-48 rounded-md px-8' key={element.id}>
                        <p>{element.product_brand}</p>
                        <p>{element.product_model}</p>
                        <p>{element.category}</p>
                        <p>{element.price}€</p>
                        <p>stock: {element.stock}</p>
                        <Link href={element.id}>
                        <button className='bg-indigo-600 px-4 rounded-md'>See more</button>
                        </Link>
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