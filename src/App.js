import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Component imports
import Layout from './hoc/Layout/Layout';
import PatientForm from './containers/Form/PatientForm/PatientForm';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={PatientForm} />
      </Switch>
    </Layout>
  );
};

export default App;
