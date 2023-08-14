// Signup.js

import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
// import MessagePopup from "../popes/popesmessage";
axios.defaults.withCredentials = true;

function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();

    axios
      .post("http://127.0.0.1:3001/api/u1/register", { name, email, password })
      .then((result) => console.log("reselte", result))
      .catch((err) => console.log("err", err));

    // console.log(name);
    // console.log(email);
    // console.log(password);
  };
  // const message = (me) => {
  //   <MessagePopup message={me} />;
  // };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={(handleSignup)}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />

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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
