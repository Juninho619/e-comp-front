import axios from "axios";

const axiosCreate = axios.create({
	baseURL: "http://localhost:3000/product/",
	headers: {
		"Content-Type": "application/json",
	},
});

export const getAllProducts = axiosCreate.get('all');
export const createProduct = axiosCreate.post('create')
export const buyProduct = axiosCreate.post("buy")
export const updateProduct = axiosCreate.patch('update/:id')
export const deleteProduct = axiosCreate.delete('delete/:id')