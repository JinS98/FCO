import { css } from "@emotion/react";

export const globalStyles = css`
  /* background-image: url(/background.webp); */
  background-size: cover;
  background-position-x: center;
  background-color: black;

  * {
    margin: 0;
    box-sizing: border-box;
    
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
