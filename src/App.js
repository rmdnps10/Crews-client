import { BrowserRouter } from 'react-router-dom';
import 'style/font.css';

import Router from 'Router';
import GlobalStyle from 'style/GlobalStyle';
import { AppContainer } from 'components/templates';
import { Hello } from 'pages';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Router />
        <Hello />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
