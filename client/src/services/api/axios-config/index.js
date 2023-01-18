import axios from "axios";
import notificacao from "../../../utils/notificacao";


const apiUrl = "http://localhost:3000";
const LOCAL_STORAGE_KEY__ACESS_TOKEN = 'APP_ACCES_TOKEN';
const LOCAL_STORAGE_USER = 'APP_ACESS_U'
axios.interceptors.request.use(
    (config) => {
        const { origin } = new URL(config.url);
        const allowedOrigins = [apiUrl];
        const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY__ACESS_TOKEN);
        if (allowedOrigins.includes(origin)) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        notificacao(false, `Request: ${error.message}`)
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(response => response, error => {
    // notificar erro
    // if (error.response.status === 400) {
    //     notificacao(false, 'Erro na requisição.')
    // } else if (error.response.status === 401) {
    //     notificacao(false, 'Sessão expirada. Faça login novamente.')
    //     setTimeout(() => window.location.href = '/login', 3000);
    // } else if (error.response.status === 403) {
    //     notificacao(false, 'Você não tem permissão para acessar essa página.')
    //     setTimeout(() => window.location.href = '/', 3000);
    // } else if (error.response.status === 404){
    //     notificacao(false, 'Não foi possível obter repsosta do servidor.')
    //     setTimeout(() => window.location.href = '/', 3000);    
    // } else {
        notificacao(false, `Response: ${error.response.data.message || error.response.data.error}`)
    // }

    return Promise.reject(error)
}
);

export const createUrl = (endpoint) => new URL(endpoint, apiUrl).href;
export const isStoredJwt = () => !!(localStorage.getItem(LOCAL_STORAGE_KEY__ACESS_TOKEN));
export const setStoredJwt = (accessToken) => {
    localStorage.setItem(LOCAL_STORAGE_KEY__ACESS_TOKEN, accessToken);
}
export const removeStoredJwt = () => localStorage.removeItem(LOCAL_STORAGE_KEY__ACESS_TOKEN)
export const getStoradeUser = () => {
    const user = localStorage.getItem(LOCAL_STORAGE_USER);

    if (!user) {
        return null;
    }

    return user;
}
export const setStoredUser = (user) => {
    localStorage.setItem(LOCAL_STORAGE_USER, user);
}
export const removeStoredUser = () => localStorage.removeItem(LOCAL_STORAGE_USER)

export const get = axios.get;
export const patch = axios.patch;
export const post = axios.post;