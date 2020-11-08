import React from 'react';

import { Container, Logo, Options, Search } from './styles';

const Header: React.FC = () => {
  return (
    <Container>

      <Logo>
        <h1>Andres</h1>
      </Logo>

      <Options>
        <a className='active' href="">
          <p>Home</p>
        </a>

        <a href="">
          <p>Ansiedade</p>
        </a>

        <a href="">
          <p>Depressão</p>
        </a>

        <a href="">
          <p>Suas finanças</p>
        </a>
      </Options>
      <Search />
    </Container>
  )
}

export default Header;