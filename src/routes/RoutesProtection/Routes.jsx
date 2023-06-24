import { useContext } from "react";
import { DashboardContext } from "../../Providers/dashboardContext";
import { Navigate, Outlet, useParams } from "react-router-dom";


export const PublicRoutes= () => {
  const { user } = useContext(DashboardContext);
  const {user_id} = useParams();

  return !user ? <Outlet /> :  <Navigate to={`/dashboard/${user_id}`} />;
};

export const PrivateRoutes = () => {
const { user } = useContext(DashboardContext);
  
  return user ? <Outlet /> :<Navigate to="/" />;
};