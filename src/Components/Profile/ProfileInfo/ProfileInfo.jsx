import React from 'react';
import Cls from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div> 
      <div>
      <img src = 'https://www.iucn.org/sites/dev/files/styles/slide_image/public/content/slide/blue.jpg?itok=Q3sP5aF7' alt = ''/>
      </div>
      <div className = {Cls.discriptionBlock}>
        ava + discription
      </div>
    </div>
  
  )
  
  }
  
  export default ProfileInfo;
