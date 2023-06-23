import { styled } from "styled-components";

export const StyledList = styled.ul`
    background-color: var(--grey-2);
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 416px;
    padding: 1rem 1.7rem;
    border-radius: 8px;
    gap: 1rem;
    overflow-y: scroll;
`
export const StyledItem = styled.li`
    background-color: var(--grey-3);
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem 0.5rem;
    height: 49px;
    align-items: center;
    font-family: var(--ff);
    color: var(--grey-0);
    border-radius: 8px;
`