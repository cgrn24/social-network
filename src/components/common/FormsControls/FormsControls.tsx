import { Field } from 'formik'
import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from 'react'
import { WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'
import style from './FormsControls.module.css'

type FormControlPropsType = {
  meta: WrappedFieldMetaProps
  children: ReactNode
}

const FormControl: FC<FormControlPropsType> = ({ meta: { touched, error }, children }) => {
  const hasError = touched && error
  return (
    <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Textarea: FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  )
}

export const Input: FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
}
export const createField = <D,>(name: string, component: FC<D>, restProps?: FormPropsType, text?: string) => {
  return (
    <div>
      <Field component={component} name={name} {...restProps} /> <span>{text}</span>
    </div>
  )
}

type FormPropsType = {
  type?: string
  validate?: Array<Function>
  placeholder?: string
}
