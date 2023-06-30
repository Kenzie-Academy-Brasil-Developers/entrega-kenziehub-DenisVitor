import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Apihub } from "../../service/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@TOKEN"));
  const userID = JSON.parse(localStorage.getItem("@USERID"));
  const [user, setUser] = useState(null);
  const goToLogin = useNavigate();

  const [modal, setModal] = useState(false);

  const changeModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await Apihub.get(`/users/${userID}`);
        setUser({
          id: userData.data.id,
          name: userData.data.name,
          course: userData.data.course_module,
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (token && userID) {
      getUserData()
    }
  }, [])
  

  const logout = () => {
    goToLogin("/");
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID")
    setUser(null);
  };

  return (
    <TechContext.Provider value={{ logout, token, user, setUser, modal, setModal, changeModal }}>
      {children}
    </TechContext.Provider>
  );
};
