import { useEffect, useState, createContext, useContext ,useCallback, useMemo } from "react";

import notificacao from "../utils/notificacao";
import { getStoradeUser, isStoredJwt, removeStoredJwt, removeStoredUser, setStoredJwt, setStoredUser } from "../services/api/axios-config/index";
import { AuthService } from "../services/api/auth/AuthService";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userStorage = getStoradeUser();
        const jwtStorage = isStoredJwt();
        if (jwtStorage) {
            setUser({ name: userStorage });
        } else {
            setUser(null);
        }
    }, []);

    const handleLogin = useCallback(async (email, password) => {
        const response = await AuthService.auth(email, password);
        if (response instanceof Error) {
            return notificacao(false, response.message)
        } else {
            setStoredJwt(response.data.token)
            setUser({name: response.data.name})
            setStoredUser(response.data.name)
        }
    }, []);

    const handleLogout = useCallback(() => {
        removeStoredUser();
        setUser(null);
        removeStoredJwt();
    });

    const isAuthenticated = useMemo(() => !!user, [user]);

    return (
        <AuthContext.Provider value={{ ...user, isAuthenticated, login: handleLogin, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);