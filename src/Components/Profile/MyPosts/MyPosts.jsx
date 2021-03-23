import React from 'react';
import Cls from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (prop) => {
  let postsElement = prop.posts.map((post) =>
  <Post key={post.id} id={post.id} message={post.message} likeCount={post.likeCount} />)   
  
  return (
    <div className = {Cls.MyPostsBlock}>
      <h3> MyPosts </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add Post</button>
      </div>
      <div className={Cls.posts}>
        {postsElement}
      </div>
    </div>
  )

}

export default MyPosts;
