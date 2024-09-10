//import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Groups from "./Groups";
import axios from "axios";
import "./App.css";

const BASE_URL = "http://localhost:5001/api/fitness";

function App() {
  const [exercises, setExercises] = useState([]);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
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
  }, []);

  async function getExercisesByMuscle(event) {
    event.preventDefault();
    try {
      const res = await axios.get(`${BASE_URL}/exercises/${inputValue}`);
      setExercises(res.data);
    } catch (e) {
      console.log("Error", e);
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home exercises={exercises} setExercises={setExercises} />}
          />
          <Route path="/myvideos" element={<h1> My Videos ... </h1>} />
          <Route path="/profile" element={<h1> Profile ... </h1>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      {/*<main>
        <Groups>
          <p>Search among the following exercise groups:</p>
          <ul>
            <li>Abdominals</li>
            <li>Abductors</li>
            <li>Adductors</li>
            <li>Biceps</li>
            <li>Calves</li>
            <li>Chest</li>
            <li>Forearms</li>
            <li>Glutes</li>
            <li>Hamstrings</li>
            <li>Lats</li>
            <li>Lower Back</li>
            <li>Middle Back</li>
            <li>Neck</li>
            <li>Quadriceps</li>
            <li>Traps</li>
            <li>Triceps</li>
          </ul>
        </Groups>
        <section>
          <form action="">
            <input
              type="text"
              name="muscle"
              placeholder="Enter muscle group"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="btn-search"
              onClick={getExercisesByMuscle}
              type="submit"
            >
              Search
            </button>
          </form>
          <ul id="exercise-list" className="pencilsnow">
            {exercises.map((exercise) => (
              <li key={exercise.id}>
                <a href="https://api-ninjas.com/api/exercises">
                  {exercise.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>*/}
    </div>
  );
}

export default App;
