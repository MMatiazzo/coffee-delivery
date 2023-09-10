import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 :focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme['purple-base']};
 }

 body {
  background: ${(props) => props.theme.background};
  /* color: ${(props) => props.theme['gray-300']}; */
  -webkit-font-smoothing: antialiased;
 }

 h1 {
  font-size: 48px;
  font-family: 'Baloo 2', sans-serif;
  line-height: 130%;
 }

 h3 {
  font-size: 24px;
  font-family: 'Baloo 2', sans-serif;
  line-height: 130%;
 }

 body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
 }
`;
