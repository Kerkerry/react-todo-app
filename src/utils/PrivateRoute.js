import { Navigate,Outlet } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../AuthContext";
import {AuthProvider} from "../AuthContext";
const PrivateRoute=()=>{
    const {token}=useContext(AuthContext)
    return token===null?<Navigate to='/' replace/> :<Outlet/>;
}

export default PrivateRoute;