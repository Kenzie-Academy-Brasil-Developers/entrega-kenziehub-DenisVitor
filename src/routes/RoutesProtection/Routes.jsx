import { useContext } from "react";
import { DashboardContext } from "../../Providers/TechContext/dashboardContext";
import { Navigate, Outlet } from "react-router-dom";


export const PublicRoutes= () => {
  const { user } = useContext(DashboardContext);
  const userID = JSON.parse(localStorage.getItem("@USERID"))

  return !user ? <Outlet /> :  <Navigate to={`dashboard/${userID}`} />;
};

export const PrivateRoutes = () => {
const { user } = useContext(DashboardContext);
  
  return user ? <Outlet /> :<Navigate to="/" />;
};