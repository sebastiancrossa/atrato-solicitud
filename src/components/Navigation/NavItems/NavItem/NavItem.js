import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  display: flex;
  height: 100%;
`;

const StyledNavLink = styled.p`
  display: flex;
  align-items: center;

  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
`;

const NavItem = ({ children }) => {
  return (
    <Li>
      <StyledNavLink>{children}</StyledNavLink>
    </Li>
  );
};

export default NavItem;
