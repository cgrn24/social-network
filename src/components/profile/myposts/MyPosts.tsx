import React, { ChangeEvent } from 'react'
import { PostsType } from '../../../redux/state'
import m from './MyPosts.module.css'
import { Post } from './post/Post'

type MyPostsType = {
  posts: Array<PostsType>
  addPost: () => void
  onPostChange: (text: string) => void
  newPostText: string
}

export const MyPosts = (props: MyPostsType) => {
  let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />)
  let newPostElement = React.createRef<HTMLTextAreaElement>()
  let onAddPost = () => {
    props.addPost()
  }
  let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.currentTarget.value
    props.onPostChange(text)
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
            <button onClick={onAddPost}>Add post</button>
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
