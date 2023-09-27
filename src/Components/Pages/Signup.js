import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const CollectData = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:5000/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("users", JSON.stringify(result));
    navigate("/");
  };

  useEffect(() => {
    const auth = localStorage.getItem("users");
    if (auth) {
      navigate("/add");
    }
  }, []);

  return (
    <div className="Signup">
      <h1>Signup</h1>
      <input
        value={name}
        className="inputBox"
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        value={email}
        className="inputBox"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <input
        value={password}
        className="inputBox"
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={CollectData} className="appButton" type="button">
        Signup
      </button>
    </div>
  );
};
export default Signup;
