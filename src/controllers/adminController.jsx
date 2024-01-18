import axios from "axios";
import { adminApi } from "../api/adminApi";

export const adminLogin = async (data) => {
	const res = await axios.post(`${adminApi.adminLogin}`, data)
	return res.data.token
}

export const addAdmin = async (data) => {
	const res = await axios.post(`${adminApi.addAdmin}`, data);
	return res.data.data
};

export const getAdmin = async () => {
	let token = localStorage.getItem("token")
	const res = await axios.get(`${adminApi.getAdmin}`, {
		headers: {
			"Authorization": token
		}
	})

	return res.data.admin
}


export const getAllAdmins = async () => {
	let token = localStorage.getItem("token")
	const res = await axios.get(`${adminApi.getAdmins}`, {
		headers: {
			"Authorization": token
		}
	})

	console.log(res);

	return res.data.data
}

export const deleteAdmin = async (id) => {
	let token = localStorage.getItem("token")
	const res = await axios.delete(`${adminApi.deleteAdmin}/${id}`, {
		headers: {
			"Authorization": token
		}
	})

	console.log(res.data);
	debugger;

	return res.data.data
}

export const getAllConductors = async () => {
	let token = localStorage.getItem("token")
	const res = await axios.get(`${adminApi.getConductors}`, {
		headers: {
			"Authorization": token
		}
	})

	return res.data.data
}

export const getSingleConductor = async (id) => {
	let token = localStorage.getItem("token")
	const res = await axios.get(`${adminApi.getSingleConductor}/${id}`, {
		headers: {
			"Authorization": token
		}
	})

	return res.data.data
}

export const addConductor = async () => {
	let token = localStorage.getItem("token")
	const res = await axios.post(`${adminApi.addConductor}`, {
		headers: {
			"Authorization": token
		}
	})

	return res.data.data
}

export const deleteConductor = async () => {
	let token = localStorage.getItem("token")
	const res = await axios.delete(`${adminApi.deleteConductor}/${id}`, {
		headers: {
			"Authorization": token
		}
	})

	return res.data.data
}


