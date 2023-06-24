import { useEffect, useState } from "react";
import { Apihub } from "../../../service/api";
import { StyledItem, StyledList } from "./StyleProfile";
import { Headline, TitleTwo } from "../../../styles/typography";
import { EditModal } from "./ProfileModal/Modal";

export function ProfileData({ token }) {
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
    getProfileData()
  }, [])

  return (
    <>
      <StyledList>
        {techs.map((tech) => (
          <StyledItem
            onClick={() => {
              changeModal(!modal), setModalData(tech);
            }}
            key={tech.id}
          >
            <TitleTwo>{tech.title}</TitleTwo>
            <Headline>{tech.status}</Headline>
          </StyledItem>
        ))}
      </StyledList>
      <EditModal data={modalData} setModal={setModal} modal={modal} setTechs={setTechs} techs={techs}/>
    </>
  );
}
