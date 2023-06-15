import styled from "styled-components";

export const StyledInput = styled.input`
  border: 1px solid transparent;
  outline: none;
  background-color: var(--grey-2);
  font-family: var(--ff);
  height: 2.5rem;
  border-radius: 4px;
  color: var(--grey-0);
  padding: 0 1.0152rem;
  font-size: 1.0152rem;
  &:focus {
    border: 1px solid var(--grey-0);
  }
  &::placeholder {
    color: #868e96;
  }
`;
