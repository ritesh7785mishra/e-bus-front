import axios from "axios";
import { userApi } from "../api/userApi";


export const userSignup = async (data) => {
    const res = await axios.post(`${userApi.userSignup}`, data);
    return res.data.data
};


export const userLogin = async (data) => {
    const res = await axios.post(`${userApi.login}`, data)
    localStorage.setItem("token", res.data.token)
}

export const getUser = async () => {
    let token = localStorage.getItem("token")
    const res = await axios.get(`${userApi.userProfile}`, {
        headers: {
            "Authorization": token
        }
    })

    return res.data.user
}

export const getRouteSelectedBuses = async (route) => {
    const data = { route }
    let token = localStorage.getItem("token")
    const res = await axios.post(`${userApi.routeSelectedBuses}`, data, {
        headers: {
            "Authorization": token
        },

    })

    return res.data.data
}

export const findAllBuses = async () => {

    let token = localStorage.getItem("token")
    const res = await axios.get(`${userApi.allBuses}`, {
        headers: {
            "Authorization": token
        },
    })

    return res.data.data
}



