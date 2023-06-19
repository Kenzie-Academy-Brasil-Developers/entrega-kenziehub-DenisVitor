import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/Login";
import { RegisterPage } from "../pages/RegisterPage/Register";
import { DashboardPage } from "../pages/DashboardPage/dashboard";

export function PageRoutes() {
    return (
        <Routes>
            <Route path="/"  element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard/:user_id" element={<DashboardPage />} />
        </Routes>
    )
}