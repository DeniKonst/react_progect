import React from "react";
import { isPropertySignature } from "typescript";
import Cls from "./Post.module.css";

const Post = (prop) => {
  return (
    <div className={Cls.item}>
      <img src="https://download-cs.net/steam/avatars/3447.jpg" />
      {prop.message}
      <div>
        <span> like: </span> {prop.likeCount}
      </div>
    </div>
  );
};

export default Post;
