import ReactDOM from 'react-dom';
// import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
import App from './App';
import AuthProvider from './contexts/auth/Provider';
import AnswersProvide from './contexts/answers/Provider';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <AnswersProvide>
        <App />
      </AnswersProvide>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
