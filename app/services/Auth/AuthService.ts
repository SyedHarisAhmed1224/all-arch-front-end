import axios from 'axios'
import apiClient from '../apiClient'

export const AuthService = {
    login: async (credentials: LoginCredentials): Promise<BackendResponse | null> => {
        try {
            const response = await apiClient.post(
                '/auth/login',
                credentials
            )

            return response.data
        } catch (err) {
            console.error("FULL ERROR:", err)

            if (axios.isAxiosError(err)) {
                console.error("MESSAGE:", err.message)
                console.error("CODE:", err.code)
                console.error("RESPONSE:", err.response)
            }

            throw err
        }
    },

    register: async (credentials: RegisterDetails): Promise<BackendResponse | null> => {
        try {
            const response = await apiClient.post(
                '/auth/register',
                credentials
            )

            return response.data
        } catch (err) {
            console.error("FULL ERROR:", err)

            if (axios.isAxiosError(err)) {
                console.error("MESSAGE:", err.message)
                console.error("CODE:", err.code)
                console.error("RESPONSE:", err.response)
            }

            throw err
        }
    }
}