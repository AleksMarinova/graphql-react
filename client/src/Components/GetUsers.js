import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQl/Queries";

const GetUsers = () => {
  const { loading, error, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <div>
      <h1>Get Users</h1>
      {users &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <h3>{user.firstName}</h3>
              <p>{user.lastName}</p>
              <p>{user.email}</p>
              <p>{user.password}</p>
            </div>
          );
        })}
    </div>
  );
};

export default GetUsers;
