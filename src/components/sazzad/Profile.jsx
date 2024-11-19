import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const userId = useSelector((state) => state.auth.userId);

  return (
    <div>
      {userId ? (
        <h2>Welcome back! User ID: {userId}</h2>
      ) : (
        <h2>You are not logged in.</h2>
      )}
    </div>
  );
};

export default Profile;
