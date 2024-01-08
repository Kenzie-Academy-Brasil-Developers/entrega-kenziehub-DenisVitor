import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { TechContext } from "../../Providers/TechContext/TechContext";


export const PublicRoutes = () =>{
  const { user } = useContext(TechContext);
  const userID = JSON.parse(localStorage.getItem("@USERID"))

  return !user ? <Outlet /> :  <Navigate to={`dashboard/${userID}`} />;
};

export const PrivateRoutes = () =>{
  const { user } = useContext(TechContext);
  
  return user ? <Outlet /> :<Navigate to="/" />;
};