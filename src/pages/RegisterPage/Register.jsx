import { StyledInput } from "../../styles/input";
import {
  Headline,
  HeadlineBold,
  MainTitle,
  TitleOne,
} from "../../styles/typography";
import {
  StyledForm,
  StyledFormTitles,
  StyledHeadline,
  StyledSection,
  StyledSelector,
} from "./Styledregister";
import { StyledButtonDark, StyledButtonRed } from "../../styles/buttons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "./registerValidation";
import { ZodErrorMessage } from "../../styles/typography";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { LogContext } from "../../Providers/context";

export function RegisterPage() {
  const { registerNewUser, isLoading, goToLogin } = useContext(LogContext);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const submitUser = (userData) => {
    registerNewUser(userData);
    reset();
  };

  return (
    <>
      <ToastContainer />
      <StyledSection>
        <StyledHeadline>
          <MainTitle>Kenzie Hub</MainTitle>
          <StyledButtonDark onClick={goToLogin}>Voltar</StyledButtonDark>
        </StyledHeadline>
        <section>
          <StyledForm onSubmit={handleSubmit(submitUser)} noValidate>
            <StyledFormTitles>
              <TitleOne>Crie a sua conta</TitleOne>
              <HeadlineBold>Rápido e grátis, vamos nessa</HeadlineBold>
            </StyledFormTitles>
            <label>
              <Headline>Nome</Headline>
              <StyledInput
                placeholder="Digite aqui seu nome"
                type="text"
                {...register("name")}
              />
              {errors.name ? (
                <ZodErrorMessage>{errors.name.message}</ZodErrorMessage>
              ) : null}
            </label>
            <label>
              <Headline>Email</Headline>
              <StyledInput
                placeholder="Digite aqui seu email"
                type="email"
                {...register("email")}
              />
              {errors.email ? (
                <ZodErrorMessage>{errors.email.message}</ZodErrorMessage>
              ) : null}
            </label>
            <label>
              <Headline>Senha</Headline>
              <StyledInput
                {...register("password")}
                type="password"
                placeholder="Digite aqui sua senha"
              />
              {errors.password ? (
                <ZodErrorMessage>{errors.password.message}</ZodErrorMessage>
              ) : null}
            </label>
            <label>
              <Headline>Confirmar Senha</Headline>
              <StyledInput
                {...register("confirm")}
                type="password"
                placeholder="Digite novamente a sua senha"
              />
              {errors.confirm ? (
                <ZodErrorMessage>{errors.confirm.message}</ZodErrorMessage>
              ) : null}
            </label>
            <label>
              <Headline>Bio</Headline>
              <StyledInput
                {...register("bio")}
                type="text"
                placeholder="Fale sobre você"
              />
              {errors.bio ? (
                <ZodErrorMessage>{errors.bio.message}</ZodErrorMessage>
              ) : null}
            </label>
            <label>
              <Headline>Contato</Headline>
              <StyledInput
                {...register("contact")}
                type="text"
                placeholder="Opção de contato"
              />
              {errors.contact ? (
                <ZodErrorMessage>{errors.contact.message}</ZodErrorMessage>
              ) : null}
            </label>
            <label>
              <Headline>Selecionar Módulo</Headline>
              <StyledSelector {...register("course_module")}>
                <option className="nullOpt" value="">
                  Selecione o módulo
                </option>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Primeiro módulo
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo módulo
                </option>
                <option value="Terceiro módulo (Introdução ao Backend)">
                  Terceiro módulo
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                  Quarto módulo
                </option>
              </StyledSelector>
              {errors.course_module ? (
                <ZodErrorMessage>
                  {errors.course_module.message}
                </ZodErrorMessage>
              ) : null}
            </label>
            <StyledButtonRed type="submit" disabled={!formState.isValid}>
              {isLoading ? "Carregando..." : "Cadastrar"}
            </StyledButtonRed>
          </StyledForm>
        </section>
      </StyledSection>
    </>
  );
}
