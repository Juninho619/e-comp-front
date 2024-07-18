import { productProps } from "@/utils/types";
import axios from "axios";

export async function getAllProducts(){
	const url = `${process.env.NEXT_PUBLIC_API_URL}product/all`

	const axiosConfig = {
		headers: {
		  "content-type": "application/json",
		  "Access-Control-Allow-Origin": "*",
		  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
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

export async function getProductById(id: string){
	const url = `${process.env.NEXT_PUBLIC_API_URL}product/productbyid/${id}`

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

export async function createProduct(productProps: productProps){
	const url = `${process.env.NEXT_PUBLIC_API_URL}product/create`

	const axiosConfig = {
		headers: {
		  "content-type": "application/json",
		  "Access-Control-Allow-Origin": "*",
		  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		},
	  };
	  return axios
		.post(
			url,
			{
			  product_brand: productProps.product_brand,
			  product_model: productProps.product_model,
			  price: productProps.price,
			  stock: productProps.stock,
			  category: productProps.category
			},
			axiosConfig
		  )
		  .then((res) => {
			return res;
		  })
		  .catch((e) => {
			throw new Error(e);
		  });
}

export async function buyProduct(productProps: productProps){
	const url = `${process.env.NEXT_PUBLIC_API_URL}product/buy`

	const axiosConfig = {
		headers: {
		  "content-type": "application/json",
		  "Access-Control-Allow-Origin": "*",
		  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		},
	  };
	  return axios
		.post(
			url,
			{
			  product_brand: productProps.product_brand,
			  product_model: productProps.product_model,
			  price: productProps.price,
			  stock: productProps.stock,
			  category: productProps.category
			},
			axiosConfig
		  )
		  .then((res) => {
			return res;
		  })
		  .catch((e) => {
			throw new Error(e);
		  });

}

export async function updateProduct(id: string){
	const url = `${process.env.NEXT_PUBLIC_API_URL}product/update/${id}`

	const axiosConfig = {
		headers: {
		  "content-type": "application/json",
		  "Access-Control-Allow-Origin": "*",
		  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		},
	  };
	  return axios
		.patch(
			url,
			axiosConfig
		  )
		  .then((res) => {
			return res;
		  })
		  .catch((e) => {
			throw new Error(e);
		  });
}

export async function deleteProduct(id: string){
	const url = `${process.env.NEXT_PUBLIC_API_URL}product/delete/${id}`

	const axiosConfig = {
		headers: {
		  "content-type": "application/json",
		  "Access-Control-Allow-Origin": "*",
		  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		},
	  };
	  return axios
		.delete(
			url,
			axiosConfig
		  )
		  .then((res) => {
			return res;
		  })
		  .catch((e) => {
			throw new Error(e);
		  });
}



