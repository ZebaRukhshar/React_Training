import React from "react";
import "./PostBox.css"; 

const PostBox = ({ user }) => {
  return (
    <div className="postBox">
      <img src={user.profilePic} alt="Profile" className="avatar" />
      <input
        type="text"
        className="postInput"
        placeholder={`What's on your mind, ${user.name}?`}
      />
    </div>
  );
};

export default PostBox;
