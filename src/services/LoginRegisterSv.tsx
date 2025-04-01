import API from "../../api";


export const LoginRequst = async (email: string, password: string) => {
    try {
        const payload = {
            email: email,
            password: password
        }
        const response = await API.post('/api/auth/login', payload)
        return response;
    } catch (error: any) {
        throw error;
    }
}