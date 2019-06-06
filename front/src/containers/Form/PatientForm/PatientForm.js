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
  margin-bottom: 1.5rem;
`;

const StyledLabel = styled.label`
  align-self: center;
  font-size: 1.3rem;
`;

const StyledInput = styled.input`
  margin-right: 0.5rem;
`;

const PatientFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Escriba su nombre')
    .min(3, 'Nombre muy corto')
    .max(25, 'Nombre muy largo'),
  lastName: Yup.string()
    .required('Escriba su apellido')
    .min(3, 'Apellido muy corto')
    .max(25, 'Apellido muy largo'),
  email: Yup.string()
    .email('Correo electronico invalido')
    .required('Favor de escribir un correo'),
  age: Yup.number()
    .required('Favor de introducir edad')
    .moreThan(17, 'Debe ser mayor de edad para mandar una solicitud')
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
                title='Nombre'
                placeholder='Nombre...'
                component={Input}
              />

              <Field
                type='text'
                name='lastName'
                title='Apellido'
                placeholder='Apellido...'
                component={Input}
              />
            </StyledFormRow>

            <Field
              type='email'
              name='email'
              title='Correo'
              placeholder='Correo..'
              component={Input}
            />

            <StyledFormRow>
              <Field
                type='number'
                name='age'
                title='Edad'
                placeholder='Edad...'
                component={Input}
              />

              <StyledLabel>
                <StyledInput type='checkbox' name='maritalStatus' />
                Casad@
              </StyledLabel>
            </StyledFormRow>

            <Field
              type='number'
              name='averageMonthlyIncome'
              title='Ingreso mensual promedio'
              placeholder='Ingreso mensual promedio'
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
