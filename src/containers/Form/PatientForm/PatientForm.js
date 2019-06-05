import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
  FormWrapper,
  StyledForm,
  StyledFormRow
} from '../../../hoc/Layout/elements';

// Component imports
import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Button/Button';
import DescriptionBlock from '../../../components/UI/Forms/DescriptionBlock/DescriptionBlock';

const Header = styled.h1`
  font-size: 1.5rem;

  color: var(--color-text);
  margin-bottom: 1rem;
`;

const PatientFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Escriba su nombre')
    .min(3, 'Nombre muy corto')
    .max(25, 'Nombre muy largo'),
  lastName: Yup.string()
    .required('Escriba sus apellidos')
    .min(3, 'Apellido muy corto')
    .max(25, 'Apellido muy largo'),
  email: Yup.string()
    .email('Correo electronico invalido')
    .required('Favor de escribir un correo'),
  age: Yup.number()
    .required('Favor de introducir edad')
    .min(18, 'Debe ser mayor de edad para mandar una solicitud')
    .positive('Numero invalido'),
  averageMonthlyIncome: Yup.number()
    .positive('Numer invalido')
    .required('Favor de introducir ingreso')
});

const PatientForm = ({ loading }) => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        averageMonthlyIncome: ''
      }}
      validationSchema={PatientFormSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <StyledForm>
            <Header>Llene la siguiente solicitud</Header>
            <StyledFormRow>
              <Field
                type='text'
                name='firstName'
                placeholder='Nombre'
                component={Input}
              />

              <Field
                type='text'
                name='lastName'
                placeholder='Apellido'
                component={Input}
              />
            </StyledFormRow>

            <Field
              type='email'
              name='email'
              placeholder='Correo'
              component={Input}
            />

            <StyledFormRow>
              <Field
                type='number'
                name='age'
                placeholder='Edad'
                component={Input}
              />

              <label>
                <input type='checkbox' name='maritalStatus' />
                Casad@
              </label>
            </StyledFormRow>

            <Field
              type='number'
              name='averageMonthlyIncome'
              placeholder='Ami'
              component={Input}
            />

            <Button
              disabled={!isValid || isSubmitting}
              loading={loading ? 'Mandando solicitud...' : null}
              type='submit'
            >
              Solicitar
            </Button>
          </StyledForm>
          <DescriptionBlock>
            Simplifica tu tratamiento a pagos mensuales fáciles, sin comisiones
            ocultas ni sorpresas.
          </DescriptionBlock>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default PatientForm;
