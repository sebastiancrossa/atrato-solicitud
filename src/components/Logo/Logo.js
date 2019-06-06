import React from 'react';

import styled from 'styled-components';

const LogoWrapper = styled.div`
  padding: 1rem;
  color: var(--color-text);

  height: 100%;

  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 2rem;
`;

const Logo = () => {
  return <LogoWrapper>Atrato</LogoWrapper>;
};

export default Logo;
