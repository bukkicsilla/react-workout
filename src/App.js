//import logo from "./logo.svg";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
//import axios from "axios";
import "./App.css";

//const BASE_URL = "http://localhost:5001/api/fitness";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/myvideos" element={<h1> My Videos ... </h1>} />
          <Route path="/profile" element={<h1> Profile ... </h1>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
