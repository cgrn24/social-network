import React, { FC } from 'react'
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
  captcha: string
}

type LoginMDTPType = {
  loginTC: (email: string, password: string, rememberMe?: boolean, captcha?: string) => void
}

type LoginMSTPType = {
  isAuth: boolean
  captcha: string | null
}

type LoginPropsType = LoginMDTPType & LoginMSTPType

type LoginFormOwnProps = {
  captcha: string | null
}

type NewType = FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps>

const LoginForm: NewType = (props) => {
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
      {props.captcha && <img src={props.captcha} alt='captcha' />}
      {props.captcha && <Field component={Input} name={'captcha'} placeholder={'Symbols from image'} validate={[required]} />}
      {props.error && <div className={style.formSummaryError}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({ form: 'login' })(LoginForm)

const Login = (props: LoginPropsType) => {
  const onSubmit = (formData: FormDataType) => {
    props.loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha} />
    </div>
  )
}
const mapStateToProps = (state: RootStoreType) => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captcha,
})

export default connect(mapStateToProps, { loginTC })(Login)
