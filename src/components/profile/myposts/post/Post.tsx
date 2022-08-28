import React from 'react';
import p from './Post.module.css'

export const Post = () => {
  return (
    <div className={p.item}>
      <img src='http://www.ljplus.ru/img4/m/u/muchaev/_zhsloe1.jpg'></img>
      {/* {props.message} */}
      <div>My post</div>
      <div>
        <span>11 likes</span>
      </div>
    </div>
  )
}
