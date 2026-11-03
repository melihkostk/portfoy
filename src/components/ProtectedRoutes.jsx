import { Navigate, Outlet } from "react-router-dom"
import { useAppContext } from "../context/AppContext"

export function ProtectedRoutes() {
    const { loged, authChecked } = useAppContext();
    if (!authChecked) {
        return null;
    }

    return loged ? <Outlet /> : <Navigate replace={true} to="/login" />
}