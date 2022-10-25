import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *,html {
    padding: 0;
    margin: 0;

    box-sizing: border-box;

    font-family: 'Poppins', 'Roboto', Arial, Helvetica, sans-serif;
  }

  button {
    all: unset;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`