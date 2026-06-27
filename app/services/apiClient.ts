import axios from 'axios'

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://192.168.100.7:8080/allarch',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 403) {
            window.location.href = '/home'
        }

        return Promise.reject(error)
    }
)

export default apiClient