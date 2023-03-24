import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

export const Login = () => {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData)
  }
  return <LoginReduxForm onSubmit={onSubmit} />
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'} component={Input} validate={[required]} name={'login'} />
      </div>
      <div>
        <Field placeholder={'Password'} component={Input} validate={[required]} name={'password'} />
      </div>
      <div>
        <Field type={'checkbox'} component={Input} name={'rememberMe'} />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<FormDataType>({
  form: 'login',
})(LoginForm)
