//import logo from "./logo.svg";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
//import axios from "axios";
import "./App.css";

//const BASE_URL = "http://localhost:5001/api/fitness";

function App() {
  //const [exercises, setExercises] = useState([]);
  //const [inputValue, setInputValue] = useState("");
  /*useEffect(() => {
    async function getAllExercises() {
      try {
        const res = await axios.get(`${BASE_URL}/allexercises`);
        setExercises(res.data);
        //console.log("Exercises", res.data);
      } catch (e) {
        console.log("Error", e);
      }
    }
    getAllExercises();
  }, []);*/

  /*async function getExercisesByMuscle(event) {
    event.preventDefault();
    try {
      const res = await axios.get(`${BASE_URL}/exercises/${inputValue}`);
      setExercises(res.data);
    } catch (e) {
      console.log("Error", e);
    }
  }*/

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
