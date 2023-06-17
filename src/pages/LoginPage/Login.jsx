import { Link, useNavigate } from "react-router-dom";
import { StyledInput } from "../../styles/input";
import {
  Headline,
  HeadlineBold,
  MainTitle,
  TitleOne,
} from "../../styles/typography";
import { StyledButtonGrey, StyledButtonRed } from "../../styles/buttons";
import { StyledForm, StyledDivision, StyledPage, StyledContainer } from "./Styledlogin";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Apihub } from "../../service/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodErrorMessage } from "../../styles/typography";
import { LoginSchema } from "./loginValidation";


export function LoginPage() {
  const [changeType, setChangeType] = useState("password");
  
  const [changeBorder, setChangeBorder] = useState("onblur");

  const style = { color: "var(--grey-1)", cursor: "pointer" };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });
  

  const changeTheType = () => {
    if (changeType === "password") {
      setChangeType("text");
    } else if (changeType === "text") {
      setChangeType("password");
    }
  };


  const changeTheBorder = () => {
    if (changeBorder === "onblur") {
      setChangeBorder("onfocus");
    } else if (changeBorder === "onfocus") {
      setChangeBorder("onblur");
    }
  };


  const logUser = async (userData) => {
    try {
      const res = await Apihub.post("/sessions", userData);
      localStorage.setItem("@USER", JSON.stringify(res.data.user));
      localStorage.setItem("@USERID", JSON.stringify(res.data.user.id));
      localStorage.setItem("@TOKEN", JSON.stringify(res.data.token));
      goToDashboard();
    } catch (error) {
      console.log(error);
    }
  };


  const logToPage = (logData) => {
    logUser(logData);
    reset();
  };


  const navToDashboard = useNavigate();
  const goToDashboard = () => {
    navToDashboard("/dashboard");
  };

  
  return (
    <StyledPage>
      <MainTitle>Kenzie Hub</MainTitle>
      <StyledContainer>
      <StyledForm noValidate onSubmit={handleSubmit(logToPage)}>
        <TitleOne textposition="center">Login</TitleOne>
        <label>
          <Headline>Email</Headline>
          <StyledInput
            {...register("email")}
            type="email"
            placeholder="Seu email"
          />
        </label>
          {errors.name ? (
            <ZodErrorMessage>{errors.name.message}</ZodErrorMessage>
          ) : null}
        <label>
          <Headline>Senha</Headline>
          <StyledDivision
            onFocus={changeTheBorder}
            onBlur={changeTheBorder}
            borderfocus={changeBorder}
          >
            <StyledInput
              {...register("password")}
              placeholder="Sua senha"
              onFocus={changeTheBorder}
              onBlur={changeTheBorder}
              type={changeType}
            />
            {changeType === "password" ? (
              <BsFillEyeFill onClick={changeTheType} style={style} />
            ) : (
              <BsFillEyeSlashFill onClick={changeTheType} style={style} />
            )}
          </StyledDivision>
        </label>
            {errors.password ? (
              <ZodErrorMessage>{errors.password.message}</ZodErrorMessage>
            ) : null}
        <StyledButtonRed type="submit">Entrar</StyledButtonRed>
        <HeadlineBold textposition="center">
          Ainda não possui uma conta?
        </HeadlineBold>
      </StyledForm>
        <StyledButtonGrey>
          <Link to="/register">Cadastre-se</Link>
        </StyledButtonGrey>
      </StyledContainer>
    </StyledPage>
  );
}
