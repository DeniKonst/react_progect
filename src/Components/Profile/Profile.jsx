import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Cls from './Profile.module.css';


const Profile = (prop) => {
  
  
  return (
    <div>
  <ProfileInfo />
  <MyPosts posts = {prop.state.posts}/>
     </div>
  )
  }
  
  export default Profile;
