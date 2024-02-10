
import { conductorApi } from "../api/conductorApi"
import axios from "axios"

export const conductorLogin = async (data) => {
    const res = await axios.post(`${conductorApi.login}`, data)
    localStorage.setItem("token", res.data.token)
    return res.data.token
}

export const getConductor = async () => {
    let token = localStorage.getItem("token")
    console.log("token", token);
    const res = await axios.get(`${conductorApi.conductorProfile}`, {
        headers: {
            "Authorization": token
        }
    })

    console.log("conductor data", res.data.conductor);

    return res.data.conductor
}

export const updateRoute = async (currentRoute) => {
    console.log(currentRoute);
    debugger;

    const data = { currentRoute }
    let token = localStorage.getItem("token")
    const res = await axios.patch(`${conductorApi.updateRoute}`, data, {
        headers: {
            "Authorization": token
        },

    })

    return res.data.data
}

export const updateLocation = async (longlat) => {

    const data = { longlat }
    let token = localStorage.getItem("token")
    const res = await axios.patch(`${conductorApi.updateLocation}`, data, {
        headers: {
            "Authorization": token
        },

    })

    console.log(res.data.data);
    debugger;

    return res.data.data
}

export const updateSeatStatus = async (
    seatStatus
) => {
    const data = { seatStatus }
    let token = localStorage.getItem("token")
    const res = await axios.patch(`${conductorApi.updateSeatSeatStatus}`, data, {
        headers: {
            "Authorization": token
        },

    })

    return res.data.message
}