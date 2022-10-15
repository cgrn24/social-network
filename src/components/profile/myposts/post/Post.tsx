import React from 'react'
import { PostsType } from '../../../../redux/state'
import p from './Post.module.css'

export const Post = (props: PostsType) => {
  return (
    <div className={p.item} key={props.id}>
      <img src='http://www.ljplus.ru/img4/m/u/muchaev/_zhsloe1.jpg'></img>
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}
