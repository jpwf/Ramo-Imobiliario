import notificacao from "../../../utils/notificacao";
import { createUrl, post } from "../axios-config";


const register = async (user) => {
    try {
        const data = await post(createUrl("/user/register"), user );

        if (data) {
            return data;
        }

    } catch (error) {
        console.log(error);
    }
}

export const RegisterService = { register };