import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: var(--color-white);
  color: var(--color-text);

  border: 1px solid var(--color-border);
  border-radius: 5px;
  font-weight: 500;
  font-size: 1.2rem;

  &::placeholder {
    color: gray;
  }
`;

const StyledInputLabel = styled.p`
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

const Error = styled.div`
  color: red;
  padding: 0rem 1.3rem;

  position: absolute;
  bottom: 0;
  left: 0;

  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transform: translateY(${({ show }) => (show ? '14px' : '10px')});
  transition: all 0.1s;

  font-weight: 500;
  font-size: 1rem;
`;

const Input = ({ field, title, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <StyledInputLabel>{title}</StyledInputLabel>
      <StyledInput {...field} {...props} />
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </InputWrapper>
  );
};

export default Input;
