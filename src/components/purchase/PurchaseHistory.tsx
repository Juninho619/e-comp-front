import { getPurchaseByUser } from '@/services/getPurchase';
import { purchaseProps } from '@/utils/types'
import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';



const PurchaseHistory = ({id}: {id: string}) => {
    const [purchase, setPurchase] = useState<purchaseProps[]>()

    useEffect(() => {
		getPurchaseByUser(id)
      .then((res) => {
        setPurchase(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

    const columns: GridColDef[] = [
        {
          field: "A",
          headerName: "Id",
          width: 350,
          renderCell: (params) => {
            return <p>{params.row.id}</p>;
          },
        },
        {
          field: "B",
          headerName: "Brand",
          width: 150,
          renderCell: (params) => {
            return <p>{params.row.product_brand}</p>;
          },
        },
    ]
  return (
    <div>
        <DataGrid columns={columns}/>
    </div>
  )
}

export default PurchaseHistory