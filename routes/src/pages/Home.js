import React from "react";
import { logout } from "../utils/auth";
import { history } from "../history";

const Home = () => {
  const handleLogOut = () => {
    logout();
    history.push("/login");
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={handleLogOut}>LogOut</button>
    </>
  );
};

export default Home;
