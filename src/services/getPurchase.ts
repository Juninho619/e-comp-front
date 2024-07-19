import axios from "axios";

export async function getAllPurchase(){
	const url = `${process.env.NEXT_PUBLIC_API_URL}purchase/all`

	const axiosConfig = {
		headers: {
		  "content-type": "application/json",
		  "Access-Control-Allow-Origin": "*",
		  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		  Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	  };
	  return axios
		.get(
		  url,
		  axiosConfig
		)
		.then((res: any) => {
		  return res;
		})
		.catch((e) => {
		  throw new Error(e);
		});
}

export async function getPurchaseByUser(id: string){

	const url = `${process.env.NEXT_PUBLIC_API_URL}purchase/purchasebyuser/${id}`

	const axiosConfig = {
		headers: {
		  "content-type": "application/json",
		  "Access-Control-Allow-Origin": "*",
		  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		  Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	  };
	  return axios
		.get(
		  url,
		  axiosConfig
		)
		.then((res: any) => {
		  return res;
		})
		.catch((e) => {
		  throw new Error(e);
		});

}

export async function deletePurchase(id: string){
	const url = `${process.env.NEXT_PUBLIC_API_URL}purchase/delete/${id}`

	const axiosConfig = {
		headers: {
		  "content-type": "application/json",
		  "Access-Control-Allow-Origin": "*",
		  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		  Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	  };
	  return axios
		.delete(
		  url,
		  axiosConfig
		)
		.then((res: any) => {
		  return res;
		})
		.catch((e) => {
		  throw new Error(e);
		});

}