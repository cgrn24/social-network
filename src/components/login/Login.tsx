import { PresetColorTypes } from 'antd/lib/_util/colors'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { loginTC } from '../../redux/authReducer'
import { RootStoreType } from '../../redux/store'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

type LoginPropsType = {
  loginTC: (email: string, password: string, rememberMe?: boolean) => void
}

type LoginFormType = {
  isAuth: boolean
}

const Login = (props: LoginPropsType) => {
  const onSubmit = (formData: FormDataType) => {
    props.loginTC(formData.login, formData.password, formData.rememberMe)
  }
  return <LoginReduxForm onSubmit={onSubmit} />
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Email'} component={Input} validate={[required]} name={'email'} />
      </div>
      <div>
        <Field placeholder={'Password'} component={Input} validate={[required]} name={'password'} type='password' />
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

const mapStateToProps = (state: RootStoreType) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { loginTC })(Login)
