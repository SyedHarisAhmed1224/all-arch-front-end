import apiClient from '../apiClient'

export const AuthService = {
    login: async (credentials: LoginCredentials): Promise<BackendResponse> => {
        const response = await apiClient.post<BackendResponse>('/auth/login', credentials);
        return response.data;
    }
}