"use client";

import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const data = response.json();
    console.log(data);
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
