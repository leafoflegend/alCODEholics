import React, { useEffect } from "react";

import { getDemUsers } from "../api/index";

const GetAllUsers = (props) => {
  const { users, setUsers } = props;

  useEffect(() => {
    getDemUsers()
      .then((users) => {
          console.log(users)
        setUsers(users);
      })
      .catch(console.error);
  }, [setUsers]);

  return (
    <div>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <h1>Users: {user.username}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default GetAllUsers;
