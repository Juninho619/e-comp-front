import Header from '@/components/Header/Header'
import ProductDetail from '@/components/ProductDetail'
import React from 'react'

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <Header/>
      <ProductDetail id={params.id} />
    </div>
  )
}

export default page