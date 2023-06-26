import { styled } from "styled-components";

export const StyledButtonRed = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  border-radius: 4px;
  font-family: var(--ff);
  color: var(--grey-0);
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0rem 1.3959rem;
  gap: 0.6344rem;
  background-color: var(--color-primary);
  &:hover {
    background-color: var(--color-primary-focus);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-primary-negative);
  }
`;
export const StyledButtonGrey = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  border-radius: 4px;
  font-family: var(--ff);
  color: var(--grey-0);
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.6344rem;
  background-color: var(--grey-1);
  &:hover {
    background-color: var(--grey-2);
  }
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--grey-0);
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;
export const StyledButtonDark = styled.button`
  height: 40px;
  padding: 0px 16.2426px;
  border-radius: 4px;
  background-color: var(--grey-3);
  font-family: var(--ff);
  color: var(--grey-0);
  &:hover {
    background-color: var(--grey-2);
  }
`;
