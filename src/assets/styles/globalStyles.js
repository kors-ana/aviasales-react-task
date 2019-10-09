import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;    
  }
  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
		font: inherit;
		color: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'OpenSanc', sans-serif;
    font-size: 14px;
    font-weight: 500;
		line-height: 17px;
    color: #333333;
    background: #F3F7FA;
    -webkit-overflow-scrolling: touch;
  }
  ol, ul {
    list-style: none;
  }
  p, ul, li {
    margin: 0;
    padding: 0;
  }
  input,
  button,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    border: 0;
    background-color: transparent;
    &:focus {
      outline: 0;
      box-shadow: 0;
    }
  }  
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    padding: 0;
    &:disabled {
      cursor: initial;
    }
  }
	a {
		text-decoration: none;
	}
`;

export default GlobalStyle;
