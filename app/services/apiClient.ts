import axios from 'axios'
import https from 'https'
import { redirect } from 'next/navigation'

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://192.168.100.7:8080/allarch',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },

    httpsAgent: new https.Agent({
        rejectUnauthorized: false,
    }),
})

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 403) {
            redirect('/home')
        }

        return Promise.reject(error)
    }
)

export default apiClient