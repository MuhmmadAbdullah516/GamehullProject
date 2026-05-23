import { Navigate,Outlet,useLocation }  from "react-router-dom";
import { useAuth } from "@/hooks/auth/use-auth";

function ProtectedRoute(){
    const {isAuthenticated} = useAuth();
    const location = useLocation()

    if(!isAuthenticated){
        return <Navigate replace state={{from:location}} to="/login"/>
    }

    return <Outlet/>
}

export default ProtectedRoute;