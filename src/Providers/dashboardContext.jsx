import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Apihub } from "../service/api";

export const DashboardContext = createContext({});

export const DashboardProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@TOKEN"));
  const userID = JSON.parse(localStorage.getItem("@USERID"));
  const [user, setUser] = useState({});
  const goToLogin = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await Apihub.get(`/users/${userID}`);
        setUser({
          name: userData.data.name,
          course: userData.data.course_module,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, [user]);

  const logout = () => {
    localStorage.clear();
    setUser({});
    goToLogin("/");
  };

  return (
    <DashboardContext.Provider value={{ logout, token, user, setUser }}>
      {children}
    </DashboardContext.Provider>
  );
};
