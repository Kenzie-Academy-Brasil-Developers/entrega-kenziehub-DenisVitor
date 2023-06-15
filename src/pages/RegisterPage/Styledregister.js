import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--grey-4);
  background-size: cover;
  padding: 1vw 0;
`;
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
  .nullOpt {
    display: none;
  }
  &:focus {
    border: 1px solid var(--grey-0);
  }
`;
export const StyledForm = styled.form`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--grey-3);
  padding: 1rem 1.5rem;
  width: clamp(3rem, 70vw, 27rem);
  label {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
export const StyledHeadline = styled.div`
  display: flex;
  justify-content: space-between;
  width: clamp(3rem, 70vw, 27rem);
  align-items: center;
  text-align: center;
  margin: 1rem 0;
`;
export const StyledFormTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;
