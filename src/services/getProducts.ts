import axios from "axios";

const axiosCreate = axios.create({
	baseURL: "http://localhost:3000/products/",
	headers: {
		"Content-Type": "application/json",
	},
});

export const getAllProducts = axiosCreate.get("all");