import { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { Apihub } from "../../service/api";

export function DashboardPage() {
  const [user, setUser] = useState({ name: "", course: "" });
  const { user_id } = useParams();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await Apihub.get(`/users/${ user_id }`)
        setUser({
          name: userData.data.name,
          course: userData.data.course_module
        })
      } catch (error) {
        console.log(error)
      }
    };
    getUserData()
  }, [user]);

  const goToLogin = useNavigate();

  const logout = () => {
    goToLogin("/");
    localStorage.clear();
  };

  validation();
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
        <TitleOne>Que pena! Estamos em desenvolvimento</TitleOne>
        <TextDashboard>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </TextDashboard>
      </StyledTextSection>
    </StyledBoard>
  );
}
