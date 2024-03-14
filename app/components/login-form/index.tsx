"use client";

import { FormEventHandler, useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e: any) => {
    e.preventDefault();
    /// fetch
  };

  return (
    <form onSubmit={loginUser}>
      <p>
        Email:
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </p>
      <p>
        Password:
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </p>
      <button type="submit">Login</button>
      {email} {password}
    </form>
  );
};

export default LoginForm;
