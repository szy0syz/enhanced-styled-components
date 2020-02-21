import React from 'react';
import { render } from 'react-dom';
import Root from '#components/Root';
import * as theme from './config/theme'
import { ThemeProvider } from 'styled-components';

render(
  <ThemeProvider theme={theme}>
    <Root />
  </ThemeProvider>,
  document.getElementById('app')
);
