import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import theme from './utils/theme';
import GlobalStyles from './utils/global';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <App />
      <GlobalStyles />
    </>
  </ThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
