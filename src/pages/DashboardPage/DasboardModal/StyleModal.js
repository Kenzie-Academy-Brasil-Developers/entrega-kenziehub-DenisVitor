import { styled } from "styled-components";


export const StyledModalClose = styled.button`
    background-color: transparent;
    color: var(--grey-1);
    font-size: 17px;
`

export const StyledOverlay = styled.div`
   position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const StyledModal = styled.section`
    width: 450px;
    height: 340px;
    background-color: var(--grey-4);
    display: flex;
    flex-direction: column;
    border-radius: 8px;
`
export const StyledModalTitle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.7rem 1.5rem;
    background-color: var(--grey-3);
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
`
export const StyledModalArea = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
    gap: 2rem;
    label{
        display: flex;
        flex-direction: column;
        text-align: start;
        gap: 0.5rem;
    }
`
export const StyledSelector = styled.select`
  font-family: var(--ff);
  height: 38px;
  padding: 0 1rem;
  border-radius: 4px;
  background-color: var(--grey-2);
  color: var(--grey-1);
  font-size: 1.0152rem;
  font-weight: 400;
  line-height: 21px;
  outline: none;
  border: none;
  &:focus {
    border: 1px solid var(--grey-0);
  }
`;