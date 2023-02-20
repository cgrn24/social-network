import React, { ChangeEvent } from 'react'
import { addPostAC, updateNewPostChangeAC } from '../../../redux/profileReducer'
import { PostsType } from '../../../redux/state'
import m from './MyPosts.module.css'
import { Post } from './post/Post'

type MyPostsType = {
  posts: Array<PostsType>
  newPostText: string
  dispatch: (action: any) => void
}

export const MyPosts = (props: MyPostsType) => {
  let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />)
  let newPostElement = React.createRef<HTMLTextAreaElement>()
  let addPost = () => {
    props.dispatch(addPostAC())
  }
  let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewPostChangeAC(e.currentTarget.value))
  }
  return (
    <div>
      <div className={m.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
          <div>
            <button>Remove</button>
          </div>
        </div>
      </div>
      <div className={m.Posts}>{postsElements}</div>
    </div>
  )
}
