import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Pages/Signup";
import { Routes, Route } from "react-router-dom";
import PrivateComponent from "./Components/PrivateComponent";
import Login from "./Components/Pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateComponent />}>
          Home
          <Route path="/" element={<h1>Home</h1>}>
            Home
          </Route>
          <Route path="/add" element={<h1>Add Product</h1>}>
            Add Product
          </Route>
          <Route path="/update" element={<h1>Update Product</h1>}>
            Update Product
          </Route>
          <Route path="/logout" element={<h1>Logout Product</h1>}>
            Logout Product
          </Route>
          <Route path="/profile" element={<h1>Profile Product</h1>}>
            Profile Product
          </Route>
        </Route>
        <Route path="/signup" element={<Signup />}>
          Signup
        </Route>
        <Route path="/login" element={<Login />}>
          Login
        </Route>
      </Routes>
    </div>
  );
}

export default App;
