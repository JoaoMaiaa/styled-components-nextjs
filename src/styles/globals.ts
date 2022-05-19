import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --highlight:#391E63;
    --white:#eeeeee;
    --background:#121214;
    --colors-bars:#391E63;
    --colors-bars-2:#5727B0;
    --colors-bars-3:#57DCBE;
    --colors-bars-hover:#C2185B;
    --colors-bars-2-hover:#272AB0;
    --colors-bars-3-hover:#60C689;
    --colors-bars-ts:#3078c6;
    --colors-bars-babel:#f4da3f;
    --colors-bars-next:#fefefe;
    --colors-bars-components:#8a633b;
    --container:100rem;
    --small:1.5rem;
    --medium:3rem;
    --large:5rem;
  }

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body, #__next{
    height:100%;
    background:var(--background);
    color:var(--white);
    font-family:'Noto Sans', sans-serif;
    font-size:100%;
  }

  a{
    color:var(--highlight);
  }

  p{
    line-height:var(--medium);
    margin-bottom:var(--small);
  }
`

export default GlobalStyles