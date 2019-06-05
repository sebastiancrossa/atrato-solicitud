import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Component imports
import {
  FormWrapper,
  StyledForm,
  StyledFormRow
} from '../../../hoc/Layout/elements';

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

const PatientForm = () => {
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
              <Field type='text' name='firstName' placeholder='Nombre' />
              <ErrorMessage name='firstName' />

              <Field type='text' name='lastName' placeholder='Apellido' />
              <ErrorMessage name='lastName' />
            </StyledFormRow>

            <Field type='email' name='email' placeholder='Correo' />
            <ErrorMessage name='email' />

            <StyledFormRow>
              <Field type='number' name='age' placeholder='Edad' />
              <ErrorMessage name='age' />

              <label>
                <input type='checkbox' name='maritalStatus' />
                Casad@
              </label>
            </StyledFormRow>

            <Field
              type='number'
              name='averageMonthlyIncome'
              placeholder='Ami'
            />
            <ErrorMessage name='averageMonthlyIncome' />

            <button type='submit'>Solicitar</button>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default PatientForm;
