import { FC, ReactNode } from 'react'
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'
import { FieldValidatorType } from '../../../utils/validators/validators'
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
export function createField<FormKeysType extends string>(
  placeholder: string | undefined,
  name: FormKeysType,
  validators: Array<FieldValidatorType>,
  component: React.FC<WrappedFieldProps>,
  props = {},
  text = ''
) {
  return (
    <div>
      <Field component={component} name={name} placeholder={placeholder} validate={validators} {...props} />
      {text}
    </div>
  )
}

export type GetStringKeys<T> = Extract<keyof T, string>
