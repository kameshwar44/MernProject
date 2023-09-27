import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("users");
    if (auth) {
      navigate("/");
    }
  }, []);

  //Login Functionality
  const handleLogin = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();

    if (result.name) {
      localStorage.setItem("users", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Enter Correct Details");
    }
    console.log(result);
  };

  return (
    <div className="Login">
      <input
        className="inputBox"
        value={email}
        placeholder="Enter Email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inputBox"
        value={password}
        placeholder="Enter Password"
        type="password"
        onChange={(e) => setpassword(e.target.value)}
      />

      <button onClick={handleLogin} className="appButton" type="button">
        Login
      </button>
    </div>
  );
}

export default Login;
