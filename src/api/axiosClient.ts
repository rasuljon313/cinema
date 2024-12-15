import axios from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    params: { language: "ru-RU"},
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
})


axiosClient.interceptors.request.use(async (config) => {
    return config
})
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data
    }
    return response
}, (error) => {
    throw error
})
export default axiosClient