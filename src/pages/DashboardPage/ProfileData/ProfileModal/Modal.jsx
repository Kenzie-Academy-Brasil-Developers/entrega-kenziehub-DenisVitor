import { useEffect, useState, useRef } from "react";
import { Apihub } from "../../../../service/api";
import {
  StyledButtonsArea,
  StyledModalClose,
  StyledOverlayProfile,
  StyledProfileArea,
  StyledProfileModal,
  StyledProfileSelector,
  StyledProfileTitle,
} from "./StyleModal";
import { Headline, TitleTwo } from "../../../../styles/typography";
import { StyledInput } from "../../../../styles/input";
import { StyledButtonGrey, StyledButtonRed } from "../../../../styles/buttons";

export function EditModal({ modal, setModal, data, techs, setTechs }) {
  const token = JSON.parse(localStorage.getItem("@TOKEN"));
  const [status, setStatus] = useState(null);
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

  const changeValueStatus = (valueData) => {
    console.log(valueData)
    setStatus({ status: valueData });
  };

  const deleteValue = async (id) => {
    try {
      await Apihub.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechs((techs) => techs.filter((tech) => tech.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatus = async (id, status) => {
    try {
      const res = await Apihub.put(`/users/techs/${id}`, status, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechs((techs) =>
        techs.map((tech) => {
          if (tech.id === id) {
            return res.data;
          } else {
            return tech;
          }
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {" "}
      {modal ? (
        <StyledOverlayProfile>
          <StyledProfileModal ref={modalClose}>
            <StyledProfileTitle>
              <TitleTwo>Tecnologias Detalhes</TitleTwo>
              <StyledModalClose onClick={() => setModal(!modal)}>
                X
              </StyledModalClose>
            </StyledProfileTitle>
            <StyledProfileArea>
              <label>
                <Headline>Nome</Headline>
                <StyledInput placeholder={data.title} type="text" disabled />
              </label>
              <label>
                <Headline>Status</Headline>
                <StyledProfileSelector
                  onChange={(e) => changeValueStatus(e.target.value)}
                >
                  <option className="nullOpt" value="">Selecione um valor</option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </StyledProfileSelector>

              </label>
            </StyledProfileArea>
            <StyledButtonsArea>
              <StyledButtonRed
                onClick={() => {
                  changeStatus(data.id, status), setModal(!modal);
                }}
              >
                Salvar alterações
              </StyledButtonRed>
              <StyledButtonGrey
                onClick={() => {
                  deleteValue(data.id), setModal(!modal);
                }}
              >
                Deletar
              </StyledButtonGrey>
            </StyledButtonsArea>
          </StyledProfileModal>
        </StyledOverlayProfile>
      ) : null}
    </>
  );
}
