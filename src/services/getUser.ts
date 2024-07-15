import axios from "axios";

const axiosCreate = axios.create({
	baseURL: `${process.env.NEXT_API_URL}user/`,
	headers: {
		"Content-Type": "application/json",
	},
});

export const getAllUsers = axiosCreate.get('all')
export const updateUser = axiosCreate.patch('update/:id')
export const deleteUser = axiosCreate.delete('delete/:id')

