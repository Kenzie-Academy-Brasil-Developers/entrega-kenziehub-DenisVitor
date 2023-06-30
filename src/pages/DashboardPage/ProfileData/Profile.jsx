import { StyledItem, StyledList } from "./StyleProfile";
import { Headline, TitleTwo } from "../../../styles/typography";
import { EditModal } from "./ProfileModal/Modal";
import { useContext } from "react";
import { ProfileContext } from "../../../Providers/TechContext/TechContextProfile";


export const ProfileData = () => {
  const {techs, setTechs, modal, setModal, changeModal, modalData, setModalData} = useContext(ProfileContext)
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
