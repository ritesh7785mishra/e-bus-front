import { conductorApi } from "../api/conductorApi"

export const conductorLogin = async (data) => {
    const res = await axios.post(`${conductorApi.login}`, data)
    return res.data.token
}

export const getConductor = async () => {
    let token = localStorage.getItem("token")
    const res = await axios.get(`${conductorApi.conductorProfile}`, {
        headers: {
            "Authorization": token
        }
    })

    return res.data.conductor
}

export const updateRoute = async ({ conductor_id, currentRoute }) => {
    const data = { conductor_id, currentRoute }
    let token = localStorage.getItem("token")
    const res = await axios.patch(`${conductorApi.updateRoute}`, data, {
        headers: {
            "Authorization": token
        },

    })

    return res.data.data
}

export const updateLocation = async ({ conductor_id, longlat }) => {
    const data = { conductor_id, longlat }
    let token = localStorage.getItem("token")
    const res = await axios.patch(`${conductorApi.updateLocation}`, data, {
        headers: {
            "Authorization": token
        },

    })

    return res.data.data
}

export const updateSeatSeatStatus = async ({
    conductor_id,
    seatStatus
}) => {
    const data = { conductor_id, seatStatus }
    let token = localStorage.getItem("token")
    const res = await axios.patch(`${conductorApi.updateSeatSeatStatus}`, data, {
        headers: {
            "Authorization": token
        },

    })

    return res.data.message
}