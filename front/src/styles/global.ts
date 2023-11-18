import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.bg};

    font-size: 1.6rem;
    color: ${props => props.theme.white};
  }

  p {
    font-family: 'Epilogue', sans-serif;
  }

  a {
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
  }
`