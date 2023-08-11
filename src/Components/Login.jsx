import React from "react";
import { useState } from "react";

function Login() {
  const staticuser = { username: "nizuthasli15@gmail.com", password: "1234" };
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username == staticuser.username && password == staticuser.password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      setError("Username or password wrong");
      console.log("error");
    }
    // if (
    //   username != localStorage.getItem("username") &&
    //   password != localStorage.getItem("password")
    // ) {
    //   console.log("");
    //   localStorage.setItem("username", username);
    //   localStorage.setItem("password", password);
    // }
    // if (
    //   username == localStorage.getItem("username") &&
    //   password == localStorage.getItem("password")
    // ) {
    //   console.log("already login user");
    // } else {
    //   console.log("new user");
    // }
  };

  return (
    <>
      <label htmlFor="">Email</label>
      <input
        type="text"
        placeholder="Enter Email"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <label htmlFor="">Password</label>
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <p>{error}</p>
      <button type="button" onClick={handleLogin}>
        Submit
      </button>
    </>
  );
}

export default Login;
