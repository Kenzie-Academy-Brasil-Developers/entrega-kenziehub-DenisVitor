import { styled } from "styled-components";

export const StyledBoard = styled.div`
  background-color: var(--grey-4);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;
export const StyledHeadSection = styled.section`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  width: 100vw;
  margin-bottom: -4rem;
  gap: 4rem;
`;
export const StyledSection = styled.section`
  color: var(--grey-0);
  margin-top: 2rem;
  height: 158px;
  display: flex;
  justify-content: space-around;
  width: 100vw;
  border: 1px solid var(--grey-2);
  align-items: center;
`;
export const StyledTextSection = styled.section`
  height: 158px;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding-left: 21.63vw;
  gap: 2rem;
`;
