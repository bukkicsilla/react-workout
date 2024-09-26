import React, { useState, useEffect } from "react";
import Groups from "./Groups";
import "./App.css";
import "./Home.css";
import axios from "axios";
import FindExercisesForm from "./FindExercisesForm";
const BASE_URL = "http://localhost:5001/api/fitness";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    async function getAllExercises() {
      try {
        const res = await axios.get(`${BASE_URL}/allexercises`);
        setExercises(res.data);
      } catch (e) {
        console.log("Error", e);
      }
    }
    getAllExercises();
  }, []);

  const findExercisesByMuscle = (data) => {
    setExercises(data);
  };
  return (
    <main>
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
      <section className="search-muscle-group">
        <FindExercisesForm findExercisesByMuscle={findExercisesByMuscle} />
        <ul id="exercise-list" className="pencilsnow">
          {exercises.map((exercise) => (
            <li key={exercise.name}>
              <a href="https://api-ninjas.com/api/exercises">{exercise.name}</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};
export default Home;
