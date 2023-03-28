import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { loginTC } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'
import style from './../common/FormsControls/FormsControls.module.css'
import { RootStoreType } from '../../redux/store'

type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}

type LoginMDTPType = {
  loginTC: (email: string, password: string, rememberMe?: boolean) => void
}

type LoginMSTPType = {
  isAuth: boolean
}

type LoginPropsType = LoginMDTPType & LoginMSTPType

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Email'} name={'email'} validate={[required]} component={Input} />
      </div>
      <div>
        <Field placeholder={'Password'} name={'password'} type={'password'} validate={[required]} component={Input} />
      </div>
      <div>
        <Field component={Input} name={'rememberMe'} type={'checkbox'} /> remember me
      </div>
      {props.error && <div className={style.formSummaryError}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<FormDataType>({ form: 'login' })(LoginForm)

const Login = (props: LoginPropsType) => {
  const onSubmit = (formData: FormDataType) => {
    props.loginTC(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}
const mapStateToProps = (state: RootStoreType) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { loginTC })(Login)
