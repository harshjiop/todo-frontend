import React from "react";
import { Route, Routes } from "react-router-dom";
import Navebar from "./Navbar/Navebar";
import Todo from "./Todo/Todo";
import Signup from "./signup/signup";
import Login from "./Login/Login";
// import MessagePopup from "./popes/popesmessage";
// import ProtectedRoutes from "./Protectrouter";

function CustomRoutes() {
  return (
    <div>
      <Navebar />
      {/* <MessagePopup message="This is a message popup." /> */}

      <Routes>
        <Route path="/todo" element={<Todo />} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/AboutUs" element={<AboutUs />} /> */}
        {/* <Route path="/AboutUs" element={<AboutUs />} /> */}
        {/* <Route path="/ContactUs" element={<ContactUs />} /> */}
        {/* <Route path="/myprofile" element={<MyProfie/>} /> */}
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default CustomRoutes;
