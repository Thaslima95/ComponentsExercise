import React from "react";
import { useState, useEffect } from "react";

function UserFetch() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const data = fetch("https://dummyapi.io/data/v1/user?limit=10", {
      headers: { "app-id": "64d37bc2da1a1ec838917663" },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => setUsers(response.data));
  }, []);
  return (
    <>
      {console.log("hi")}
      {users && console.log(users)}
      {/* {users.map((e) => {
        return <h1>{e}</h1>;
      })} */}
      {users && users.map((e) => console.log(e))}
    </>
  );
}

export default UserFetch;
