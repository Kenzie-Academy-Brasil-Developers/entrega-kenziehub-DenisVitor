import { styled } from "styled-components";

export const StyledBoard = styled.div`
  background-color: var(--grey-4);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4rem;
  
`;
export const StyledHeadSection = styled.section`
    margin-top: 3rem;
    display: flex;
    width: 50vw;
    justify-content: space-between;
    white-space: nowrap;
    @media screen and (max-width: 395px) {
      justify-content: center;
      gap: 2rem;
    }
`;
export const StyledAreaSection = styled.section`
    align-items: center;
    display: flex;
    width: 100vw;
    height: 7.375rem;
    justify-content: space-between;
    flex-wrap: wrap;
    border-top: 1px solid var(--grey-3);
    border-bottom: 1px solid var(--grey-3);
    padding: 0 25vw;
    @media screen and (max-width: 395px) {
      justify-content: center;
      gap: 2rem;
    }
`;
export const StyledTextSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 50vw;
    gap: 2rem;
`;
export const StyledTechsBoard = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`