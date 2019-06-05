import styled from 'styled-components';
import { Form } from 'formik';

export const FormWrapper = styled.div`
  width: 50%;
  height: 45rem;

  border-radius: 7px;

  position: relative;

  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--color-white);
  box-shadow: 0rem 0.2rem 2.1rem var(--color-shadow);
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: start;

  position: absolute;
  left: 50px;
  top: 50px;
`;

export const StyledInputContainer = styled.div``;

export const StyledFormRow = styled.div``;
