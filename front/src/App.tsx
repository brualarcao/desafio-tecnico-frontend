import React from 'react';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import GlobalStyle from './styles/global';
import Routes from './routes/index.routes';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Routes />
  </>
);
export default App;
