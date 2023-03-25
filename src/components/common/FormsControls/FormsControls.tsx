import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'
import style from './FormsControls.module.css'

const FormControl = ({ input, meta, ...props }: any) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={style.formControl + '' + (hasError ? style.error : '')}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Textarea = (props: any) => {
  const { input, meta, ...restProps } = props
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps}></textarea>
    </FormControl>
  )
}

export const Input = (props: any) => {
  const { input, meta, ...restProps } = props
  return (
    <FormControl {...props}>
      <input {...input} {...restProps}></input>
    </FormControl>
  )
}
