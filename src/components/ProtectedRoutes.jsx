import { Navigate, Outlet } from "react-router-dom"

export function ProtectedRoutes({ loged, authChecked }) {
    if (!authChecked) {
        return null;
    }

    return loged ? <Outlet /> : <Navigate replace={true} to="/login" />
}