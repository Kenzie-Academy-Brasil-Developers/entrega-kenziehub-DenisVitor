import { createContext, useEffect, useState } from "react";
import { Apihub } from "../../service/api";

export const ProfileContext = createContext({})

export const ProfileProvider = ({children}) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"))
    const userID = JSON.parse(localStorage.getItem("@USERID"))
    const [techs, setTechs] = useState([]);
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState(null);
  
    const changeModal = () => {
      setModal(!modal);
    };
  
    useEffect(() => {
      const getProfileData = async () => {
        try {
          const userProfile = await Apihub.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setTechs(userProfile.data.techs);
        } catch (error) {
          console.log(error);
        }
      };
      if(token && userID){
        getProfileData()
      }
    }, [])
    return (
        <ProfileContext.Provider value={{techs, setTechs, modal, setModal, changeModal, modalData, setModalData}}>
            {children}
        </ProfileContext.Provider>
    )
} 