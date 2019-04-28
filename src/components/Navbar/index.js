import React from 'react';

import Icon from 'react-icons/lib/md/person-outline';
import Logo from '../../assets/logo-white.svg';
import { Container, Menu } from './styles';

const Navbar = () => (
  <Container>
    <div>
      <Menu>
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </Menu>
      <Menu>
        <a href="/">Inicio</a>
      </Menu>
      <Menu>
        <a href="/search">Buscar</a>
      </Menu>
      <Menu>
        <a href="/newmeetup">Novo Meetup</a>
      </Menu>
    </div>
    <div>
      <Menu>
        <a href="/profile">
          <Icon size={30} />
        </a>
      </Menu>
    </div>
  </Container>
);

export default Navbar;
