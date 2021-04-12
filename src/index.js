import 'modern-normalize/modern-normalize.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AnswersProvide from './contexts/answers/Provider';
import AuthProvider from './contexts/auth/Provider';
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
