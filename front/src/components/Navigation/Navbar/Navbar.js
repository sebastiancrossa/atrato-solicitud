import React from 'react';
import styled from 'styled-components';

// Component imports
import { Container } from '../../../hoc/Layout/elements';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const FixedWrapper = styled.div`
  position: fixed;

  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;

  padding: 0rem 2rem;
  width: 98%;
  height: 6rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
`;

const Navbar = () => {
  return (
    <FixedWrapper>
      <Container>
        <Wrapper>
          <Logo />
          <NavItems />
        </Wrapper>
      </Container>
    </FixedWrapper>
  );
};

export default Navbar;
