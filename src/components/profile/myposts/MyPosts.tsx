import React from 'react';
import m from './MyPosts.module.css';
import { Post } from './post/Post';

export const MyPosts = () => {
  return (
    <div>
      <div className={m.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
          <div>
            <button>Remove</button>
          </div>
        </div>
      </div>
      <div className={m.Posts}>
        <Post />
      </div>
    </div>
  )
}
