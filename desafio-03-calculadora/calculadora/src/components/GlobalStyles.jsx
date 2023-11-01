import { createGlobalStyle } from "styled-components";

//mudar esse stylo
export const GlobalStyles = createGlobalStyle`
 body { 
    width: 100vw;
    height: 100vh;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
  } 

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
  }

  ul,
  li {
    list-style: none;
  }

`;