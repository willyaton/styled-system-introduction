import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { space } from 'styled-system';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${space}

  body {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
  }

  *,
  *:before,
  *:after {
      box-sizing: border-box;
  }

  button {
    border: none;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  a:hover{
    text-decoration: none;
  }
`;
