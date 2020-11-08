import React from 'react';  

import Header from '../Header';
import Main from '../Main';
import {Wrapper} from './styles';

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
}

export default Layout;