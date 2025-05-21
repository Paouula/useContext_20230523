import Reacct from "react";
import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../pages/context/AuthContext";

const PrivateRoute =  () => {
    const { isLoggedIn } = useAuth();
    //Si el usuario no se encuentra autenticado, redirigir hacia la pág de incio
    return isLoggedIn ? <Outlet/> : <Navigate TO="/" />; 
};

export default PrivateRoute;
