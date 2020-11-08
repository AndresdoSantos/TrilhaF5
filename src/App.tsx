import React from 'react';

import Layouts from './components/Layout';
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <Layouts />
      <GlobalStyle />
    </>
  );
}

export default App;