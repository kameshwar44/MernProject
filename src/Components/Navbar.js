import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { useEffect } from "react";
function Navbar() {
  const auth = localStorage.getItem("users");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };


  return (
    <div className="Navlink">
      <Link to="/">Home</Link>
      <Link to="/add">Add Products</Link>
      <Link to="/update">Update</Link>
      <Link to="/profile">Profile</Link>
      {auth ? (
        <Link to="/signup" onClick={logout}>
          Logout
        </Link>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}

export default Navbar;
