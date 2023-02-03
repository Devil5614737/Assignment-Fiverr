import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
html{
  font-size: 62.5%;
}
  body {
    overflow-x: hidden;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style-type: none;
  }
`