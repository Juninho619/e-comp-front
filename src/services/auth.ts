import axios from "axios";

const axiosCreate = axios.create({
	baseURL: "http://localhost:3000/auth/",
	headers: {
		"Content-Type": "application/json",
	},
});

const register = axiosCreate.post('signup')
const login = axiosCreate.post('signin')