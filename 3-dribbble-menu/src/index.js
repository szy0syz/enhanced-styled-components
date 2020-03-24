import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family: Roboto, sans-serif;
}
`;

render(
  <>
    <GlobalStyle/>
    <Root />
  </>,
  document.getElementById('app')
);
