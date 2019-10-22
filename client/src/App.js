import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Layout from './hoc/Layout';
import Login from './containers/Login/Login'

function App() {
    return (
      <Layout>
        <Switch>
          <Route path={'/auth/login'} component={Login} />
          <Route path={'/auth/registration'} component={"Registration"} />
        </Switch>
      </Layout>
    )
}

export default App;
