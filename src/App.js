import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Component imports
import Layout from './hoc/Layout/Layout';
import PatientForm from './containers/Form/PatientForm/PatientForm';
import Success from './containers/Success/Success';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={PatientForm} />
        <Route exact path='/success' component={Success} />
      </Switch>
    </Layout>
  );
};

export default App;
