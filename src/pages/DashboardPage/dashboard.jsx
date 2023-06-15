import { StyledButtonDark } from "../../styles/buttons";
import {
  HeadlineBold,
  MainTitle,
  TextDashboard,
  TitleOne,
} from "../../styles/typography";
import { validation } from "../validatePages/validation";
import {
  StyledBoard,
  StyledHeadSection,
  StyledSection,
  StyledTextSection,
} from "./styleDashboard";
import { useNavigate } from "react-router-dom";

export function DashboardPage() {
  const username = JSON.parse(localStorage.getItem("@USER"));
  const backToLogin = useNavigate();
  const gotoLogin = () => {
    backToLogin("/");
    localStorage.clear();
  };
  validation()
  return (
    <StyledBoard>
      <StyledHeadSection>
        <MainTitle>Kenzie Hub</MainTitle>
        <StyledButtonDark onClick={gotoLogin}>Sair</StyledButtonDark>
      </StyledHeadSection>
      <main>
        <StyledSection>
          <TitleOne>Olá, {username.name}</TitleOne>
          <HeadlineBold>{username.course_module}</HeadlineBold>
        </StyledSection>
        <StyledTextSection>
          <TitleOne>Que pena! Estamos em desenvolvimento</TitleOne>
          <TextDashboard>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </TextDashboard>
        </StyledTextSection>
      </main>
    </StyledBoard>
  );
}
