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
