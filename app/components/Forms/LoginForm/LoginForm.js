import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="field-container">
        <div className="label-container">
          <label htmlFor="email">Email</label>
        </div>
        <Field name="email" component="input" type="email" />
      </div>
      <div className="field-container">
        <div className="label-container">
          <label htmlFor="password">Password</label>
        </div>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Sign in</button>
    </form>
  )
}

LoginForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)

export default LoginForm
