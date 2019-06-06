import React from 'react';
import styled from 'styled-components';

// Component imports
import Navbar from '../../components/Navigation/Navbar/Navbar';

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-background);
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};

export default Layout;
