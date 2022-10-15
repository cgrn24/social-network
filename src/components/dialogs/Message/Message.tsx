import React from 'react'
import { PostsType } from '../../../redux/state'
import s from './../Dialogs.module.css'

export const Message = (props: PostsType) => {
  return <div className={s.dialog}>{props.message}</div>
}
