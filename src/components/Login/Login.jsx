// Login.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import Cookies from "universal-cookie";
axios.defaults.withCredentials = true;
function Login() {
  const navigate = useNavigate();
  const cookies = new Cookies();
  // const nav = useNavigate()
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const responce = await axios.post("http://127.0.0.1:3001/api/u1/login", {
        email,
        password,
      });

      // console.log(responce);
      // set the cookie
      cookies.set("TOKEN", responce.data.token, {
        path: "/",
      });
      if (responce.data.success) {
        navigate("/todo");
      }
    } catch (error) {
      alert(error.message);
     
    }
  };
  // window.location.href = "/todo";

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
