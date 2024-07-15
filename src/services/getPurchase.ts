import axios from "axios";

const axiosCreate = axios.create({
	baseURL: `${process.env.NEXT_API_URL}purchase/`,
	headers: {
		"Content-Type": "application/json",
	},
});

export const getAllPurchase = axiosCreate.get('all')
export const getPurchaseByUser = axiosCreate.get('purchase')
export const deletePurchase = axiosCreate.delete('delete/:id')