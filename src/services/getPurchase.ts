import axios from "axios";

const axiosCreate = axios.create({
	baseURL: "http://localhost:3000/purchase/",
	headers: {
		"Content-Type": "application/json",
	},
});

export const getAllPurchase = axiosCreate.get('all')
export const getPurchaseByUser = axiosCreate.get('purchase')
export const deletePurchase = axiosCreate.delete('delete/:id')