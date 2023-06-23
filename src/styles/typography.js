import styled, { css } from "styled-components";

export const MainTitle = styled.h1`
  font-family: var(--ff);
  color: var(--color-primary);
`;
export const TitleOne = styled.h1`
  color: var(--grey-0);
  font-family: var(--ff);
  font-weight: 700;
  font-size: 1.1421rem;
  line-height: 1.75rem;
  ${({ textposition }) => {
    if (textposition === "center") {
      return css`
        text-align: center;
      `;
    }
  }}
`;
export const TitleTwo = styled.h2`
  color: var(--grey-0);
  font-family: var(--ff);
  font-weight: 600;
  font-size: 1.0152rem;
  line-height: 1.625rem;
`;
export const TitleThree = styled.h3`
  font-family: var(--ff);
  color: var(--grey-0);
  font-weight: 400;
  font-size: 0.8883rem;
  line-height: 1.5rem;
`;
export const Headline = styled.p`
  font-family: var(--ff);
  font-weight: 400;
  color: var(--grey-0);
  font-size: 0.7614rem;
  line-height: 1.375rem;
`;
export const HeadlineBold = styled.p`
  font-family: var(--ff);
  font-weight: 600;
  font-size: 0.7614rem;
  color: var(--grey-1);
  line-height: 1.125rem;
  ${({ textposition }) => {
    if (textposition === "center") {
      return css`
        text-align: center;
      `;
    }
  }}
`;
export const HeadlineItalic = styled.p`
  font-family: var(--ff);
  font-style: italic;
  font-weight: 400;
  font-size: 0.7614rem;
  line-height: 1.125rem;
  color: var(--grey-0);
`;
export const TextDashboard = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--grey-0);
  font-family: var(--ff);
`;
export const ZodErrorMessage = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: var(--pallete-error);
  font-family: var(--ff);
`;
