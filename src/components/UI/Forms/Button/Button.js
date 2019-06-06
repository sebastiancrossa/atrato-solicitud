import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  outline: none;

  margin-top: 1.5rem;
  padding: 1.1rem 2rem;
  border: none;
  border-radius: 0.5rem;

  font-size: 1.2rem;
  color: var(--color-white);
  font-weight: 700;

  background-color: var(--color-main);
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translate(2px);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: gray;
  }
`;

const Button = ({ children, disabled, loading, ...rest }) => {
  return (
    <StyledButton disabled={disabled} {...rest}>
      {loading ? loading : children}
    </StyledButton>
  );
};

export default Button;
