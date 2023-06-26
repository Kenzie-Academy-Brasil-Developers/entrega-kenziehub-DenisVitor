import {
  StyledModal,
  StyledModalArea,
  StyledModalClose,
  StyledModalTitle,
  StyledOverlay,
  StyledSelector,
} from "./StyleModal";
import { TitleThree, TitleTwo } from "../../../styles/typography";
import { StyledInput } from "../../../styles/input";
import { StyledButtonRed } from "../../../styles/buttons";
import { useForm } from "react-hook-form";
import { Apihub } from "../../../service/api";
import { useRef, useEffect, useContext } from "react";
import { ProfileContext } from "../../../Providers/TechContext/TechContextProfile";

export function AddNewValue({ modal, setModal }) {
  const {techs, setTechs} = useContext(ProfileContext)
  const { register, handleSubmit, reset } = useForm();
  const token = JSON.parse(localStorage.getItem("@TOKEN"));
  const modalClose = useRef(null);

  useEffect(() => {
    const ClickOut = (e) => {
      if (!modalClose.current?.contains(e.target)) {
        setModal(false);
      }
    };
    window.addEventListener("mousedown", ClickOut);
    return () => {
      window.removeEventListener("mousedown", ClickOut);
    };
  }, []);

  useEffect(() => {
    const PressOut = (e) => {
      if (e.key === "Escape") {
        setModal(false);
      }
    };
    window.addEventListener("keydown", PressOut);

    return () => {
      window.removeEventListener("keydown", PressOut);
    };
  }, []);

  const addNewTech = async (techData) => {
    try {
      const res = await Apihub.post("/users/techs", techData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechs(() => [...techs, res.data])
    } catch (error) {
      console.log(error);
    }
  };

  const submitModal = async (techData) => {
    await addNewTech(techData);
    setModal(!modal);
    reset();
  };

  return (
    <>
      {modal ? (
        <StyledOverlay>
          <StyledModal ref={modalClose}>
            <StyledModalTitle>
              <TitleTwo>Cadastrar Tecnologia</TitleTwo>
              <StyledModalClose onClick={() => setModal(!modal)}>
                X
              </StyledModalClose>
            </StyledModalTitle>
            <StyledModalArea onSubmit={handleSubmit(submitModal)}>
              <label>
                <TitleThree>Nome</TitleThree>
                <StyledInput type="text" {...register("title")} />
              </label>
              <label>
                <TitleThree>Selecionar status</TitleThree>
                <StyledSelector {...register("status")}>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </StyledSelector>
              </label>
              <StyledButtonRed type="submit">
                Cadastrar Tecnologia
              </StyledButtonRed>
            </StyledModalArea>
          </StyledModal>
        </StyledOverlay>
      ) : null}
    </>
  );
}
