import React, { useState } from "react";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {};
  return (
    <div className="login">
      <label>Login</label>
      <input
        placeholder="User Name"
        onChange={(event) => {
          setUsername = event.target.value;
        }}
      />
      <input
        placeholder="Password"
        onChange={(event) => {
          setPassword = event.target.value;
        }}
      />
      <button onCLick={login}>Login</button>
    </div>
  );
}

export default Login;
