import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-background);
`;

const Layout = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Layout;
