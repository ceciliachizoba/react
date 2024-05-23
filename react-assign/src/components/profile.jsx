import React, { useState, useEffect } from "react";
import UserDetails from "./UserDetails";

const Profile = ({ users }) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setUserList(users);
  }, [users]);

  return (
    <div>
      <h1>Profile</h1>
      {userList.map((user, index) => (
        <UserDetails key={index} user={user} />
      ))}
    </div>
  );
};

export default Profile;
