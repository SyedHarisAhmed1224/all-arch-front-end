import axios from 'axios'
import apiClient from '../apiClient'

export const LandingPageService = {
    getInterestFields: async (): Promise<BackendResponse | null> => {
        try {
            const response = await apiClient.get('/landing-page/get-interest-fields')

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