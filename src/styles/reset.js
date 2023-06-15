import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ol, ul{
        list-style: none;
    }
    button{
        cursor: pointer;
        border: none;
        outline: none;
        transition: 0.2s ease-in-out;
    }
`;
