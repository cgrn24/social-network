import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { PostsType } from '../../../redux/types'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'
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
export const MyPosts = React.memo<MyPostsType>((props) => {
  let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)
  let onAddPost = (values: FormDataType) => {
    props.addPost(values.newPostText)
  }
  return (
    <div>
      <div className={m.postsBlock}>
        <h3>My posts</h3>
      </div>
      <AddNewPostReduxForm onSubmit={onAddPost} />
      <div className={m.posts}>{postsElements}</div>
    </div>
  )
})

const maxLength50 = maxLengthCreator(50)

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'newPostText'} component={Textarea} placeholder={'Post message'} validate={[required, maxLength50]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostReduxForm = reduxForm<FormDataType>({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)
