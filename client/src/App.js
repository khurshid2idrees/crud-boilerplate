import "./App.css";
import Login from "./components/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/Register";
import { useEffect, createContext, useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import EditPost from "./components/EditPost";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreatePost/>} />

      </Routes>
    </>
  );
}

export default App;
