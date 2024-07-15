import axios from "axios";

const axiosCreate = axios.create({
	baseURL: `${process.env.NEXT_API_URL}auth/`,
	headers: {
		"Content-Type": "application/json",
	},
});

const register = axiosCreate.post('signup')
const login = axiosCreate.post('signin')