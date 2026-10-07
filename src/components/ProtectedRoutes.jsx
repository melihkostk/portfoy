import { Navigate, Outlet } from "react-router-dom"

export function ProtectedRoutes({loged}){
    return(
        loged ? <Outlet /> : <Navigate replace={true} to="/login" />
    )
}