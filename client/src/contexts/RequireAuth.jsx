import { useNavigate } from "react-router-dom";
import LoginPage from "../pages/Login";
import { useAuthContext } from "./AuthContext";

export const RequireAuth = ({ children }) => {
    const navigate = useNavigate();
    const { name } = useAuthContext();
    console.log(name)
    // if the user is not logged in, redirect to the login page
    if (!name) {
        return <LoginPage />
    }

    return children;
}