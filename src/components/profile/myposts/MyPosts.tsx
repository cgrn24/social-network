import React, { ChangeEvent } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { PostsType } from '../../../redux/state'
import m from './MyPosts.module.css'
import { Post } from './post/Post'

type MyPostsType = {
  posts: Array<PostsType>
  addPost: (newPostText: string) => void
  newPostText: string
}
type FormDataType = {
  newPostText: string
}
export const MyPosts = (props: MyPostsType) => {
  let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />)
  let onAddPost = (values: FormDataType) => {
    props.addPost(values.newPostText)
  }
  return (
    <div>
      <div className={m.postsBlock}>
        <h3>My posts</h3>
      </div>
      <AddNewPostReduxForm onSubmit={onAddPost} />
      <div className={m.Posts}>{postsElements}</div>
    </div>
  )
}

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'newPostText'} component={'textarea'} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostReduxForm = reduxForm<FormDataType>({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)
