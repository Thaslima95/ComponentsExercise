import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import UserDetails from "./UserDetails";

function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const data = axios
      .get("https://dummyapi.io/data/v1/user?limit=10", {
        headers: { "app-id": "64d37bc2da1a1ec838917663" },
      })
      .then((response) => setUsers(response.data.data));
    // console.log(data);
  }, []);
  return (
    <>
      {console.log("hi")}
      {users && console.log(users)}
      {/* {users.map((e) => {
        return <h1>{e}</h1>;
      })} */}
      {users && users.map((user) => <UserDetails user={user} />)}
    </>
  );
}

export default User;
