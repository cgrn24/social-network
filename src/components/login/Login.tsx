import React from 'react'
import { Field, reduxForm } from 'redux-form'

export const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return <LoginReduxForm onSubmit={onSubmit} />
}
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'} component={'input'} name={'login'} />
      </div>
      <div>
        <Field placeholder={'Password'} component={'input'} name={'password'} />
      </div>
      <div>
        <Field type={'checkbox'} component={'input'} name={'rememberMe'} />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)
