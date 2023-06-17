import { css, styled } from "styled-components";

export const StyledPage = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 7vw 0;
  height: 100vh;
  background-color: var(--grey-4);
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  background-color: var(--grey-3);
  gap: 2rem;
  width: clamp(3rem, 70vw, 27rem);
  margin-top: 2rem;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--grey-3);


  label {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
export const StyledDivision = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grey-2);
  padding-right: 1rem;
  border-radius: 4px;
  ${({ borderfocus }) => {
    if (borderfocus === "onfocus") {
      return css`
        border: 1px solid var(--grey-0);
      `;
    } else if (borderfocus === "onblur") {
      return css`
        border: 1px solid transparent;
      `;
    }
  }}
  input {
    background-color: transparent;
    flex-grow: 1;
    &:focus {
      border: none;
      outline: none;
    }
  }
`;
