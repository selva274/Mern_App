import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/loadUser";

function GetUsers() {
  const { data,error,loading } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <div>
      <h1 style={{textAlign:"center",color:"red"}}>Random User API </h1>
      {users.map((val) => {
        return <h1> {val.firstName}</h1>;
      })}
    </div>
  );
}

export default GetUsers;
