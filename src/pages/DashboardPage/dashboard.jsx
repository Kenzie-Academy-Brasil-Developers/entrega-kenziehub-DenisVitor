import { useState } from "react";
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
  StyledAreaSection,
  StyledTextSection,
} from "./styleDashboard";
import { useNavigate } from "react-router-dom";

export function DashboardPage() {
  const userData = JSON.parse(localStorage.getItem("@USER"));
  const [ user ] = useState([userData]);
  
  const goToLogin = useNavigate()

  const logout = () => {
    goToLogin('/')
    localStorage.clear()
  }

  validation()
  return (
    <StyledBoard>
      <StyledHeadSection>
        <MainTitle>Kenzie Hub</MainTitle>
        <StyledButtonDark onClick={logout}>Sair</StyledButtonDark>
      </StyledHeadSection>
        <StyledAreaSection>
          <TitleOne>Olá, {user.map(element => element.name)}</TitleOne>
          <HeadlineBold>{user.map(element => element.course_module)}</HeadlineBold>
        </StyledAreaSection>
        <StyledTextSection>
          <TitleOne>Que pena! Estamos em desenvolvimento</TitleOne>
          <TextDashboard>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </TextDashboard>
        </StyledTextSection>
    </StyledBoard>
  );
}
