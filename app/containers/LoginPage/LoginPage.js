/*
 * LoginPage
 *
 * Users log in here
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

import LoginForm from '../../components/Forms/LoginForm/LoginForm';

export default class LoginPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="login-page">
        <Helmet>
          <title>Sign in</title>
          <meta
            name="description"
            content="Sign in to the Magic Tournament Manager"
          />
        </Helmet>
        <h1>Sign in</h1>
        <LoginForm />
      </div>
    );
  }
}
