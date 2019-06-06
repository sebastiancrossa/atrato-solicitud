import React from 'react';
import styled from 'styled-components';

const StyledDescriptionBlock = styled.div`
  width: 55%;
  height: 88%;

  position: absolute;
  top: 2.6rem;
  right: -6.5rem;
  padding: 2rem 3rem;

  border-radius: 1rem;
  box-shadow: 0rem 0.2rem 3.5rem var(--color-shadowDark);

  background-color: var(--color-main);
  color: var(--color-white);
`;

const Description = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  width: 24rem;

  padding-top: 2rem;
`;

const DescriptionBlock = ({ children }) => {
  return (
    <StyledDescriptionBlock>
      <Description>{children}</Description>
    </StyledDescriptionBlock>
  );
};

export default DescriptionBlock;
