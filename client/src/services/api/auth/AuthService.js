import notificacao from "../../../utils/notificacao";
import { createUrl, post } from "../axios-config";

//function to authenticate user
const auth = async (email, password) => {
    try {
        const data = await post(createUrl("/user/login"), { email, password });
        
        if (data) {
            return data;
        }
        
        return new Error('Erro no login.');
    } catch (error) {
        console.log(error);
        return new Error((error).message || 'Erro no login.');
    }
}

export const AuthService = { auth };