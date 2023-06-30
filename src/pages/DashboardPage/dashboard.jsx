import { StyledButtonDark } from "../../styles/buttons";
import { HeadlineBold, MainTitle, TitleOne } from "../../styles/typography";
import {
  StyledBoard,
  StyledHeadSection,
  StyledAreaSection,
  StyledTextSection,
  StyledTechsBoard,
} from "./styleDashboard";
import { ProfileData } from "./ProfileData/Profile";
import { AddNewValue } from "./DasboardModal/Modal";
import { useContext } from "react";
import { TechContext } from "../../Providers/TechContext/TechContext";


export const DashboardPage = () => {
  const { logout, user, modal, setModal, changeModal } = useContext(TechContext);

  return (
    <StyledBoard>
      <StyledHeadSection>
        <MainTitle>Kenzie Hub</MainTitle>
        <StyledButtonDark onClick={logout}>Sair</StyledButtonDark>
      </StyledHeadSection>
      <StyledAreaSection>
        <TitleOne>Olá, {user.name}</TitleOne>
        <HeadlineBold>{user.course}</HeadlineBold>
      </StyledAreaSection>
      <StyledTextSection>
        <StyledTechsBoard>
          <TitleOne>Tecnologias</TitleOne>
          <StyledButtonDark onClick={() => changeModal()}>+</StyledButtonDark>
          <AddNewValue modal={modal} setModal={setModal} />
        </StyledTechsBoard>
        <ProfileData />
      </StyledTextSection>
    </StyledBoard>
  );
}
