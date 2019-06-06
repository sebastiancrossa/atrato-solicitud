import React from 'react';
import styled from 'styled-components';

// Component Imports
import NavItem from './NavItem/NavItem';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavItems = () => {
  return (
    <Nav>
      <Ul>
        <NavItem>Quiero financiar mi salud</NavItem>
      </Ul>
    </Nav>
  );
};

export default NavItems;
