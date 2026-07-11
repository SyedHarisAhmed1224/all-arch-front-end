import axios from 'axios'
import https from 'https'
import { redirect } from 'next/navigation'

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },

    httpsAgent: new https.Agent({
        rejectUnauthorized: false,
    }),
})

console.log('API BASE URL:', apiClient.defaults.baseURL)

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(error)
        if (error.response?.status === 403) {
            redirect('/home')
        }

        return Promise.reject(error)
    }
)

export default apiClient