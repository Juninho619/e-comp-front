import PurchaseHistory from '@/components/purchase/PurchaseHistory'
import React from 'react'

function page({ params }: { params: { id: string } }) {
  return (
    <div>
        <PurchaseHistory id={params.id}/>
    </div>
  )
}

export default page