import React from "react";
import PostBox from "../components/PostBox";

const home = () => {
  const user = {
    name: "Rukhshar Zeba",
    profilePic: "pro_pic.jpg", 
  };

  return (
    <div>
      <PostBox user={user} />
      {

      }
    </div>
  );
};

export default home;


