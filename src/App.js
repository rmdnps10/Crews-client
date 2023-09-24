import { BrowserRouter } from 'react-router-dom';
import 'style/font.css';

import Router from 'Router';
import GlobalStyle from 'style/GlobalStyle';
import { AppContainer } from 'components/templates';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Router />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
