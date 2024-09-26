import React, { useState, useEffect } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:5001/api/fitness";

const FindExercisesForm = ({ findExercisesByMuscle }) => {
  const initialState = {
    muscle: "",
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { muscle } = formData;
      console.log("muscle", muscle);
      const data = await getExercisesByMuscle(muscle);
      findExercisesByMuscle(data);
      setFormData(initialState);
    } catch (e) {
      console.log("Error", e);
    }
  };
  async function getExercisesByMuscle(muscle) {
    try {
      const res = await axios.get(`${BASE_URL}/exercises/${muscle}`);
      return res.data;
    } catch (e) {
      console.log("Error", e);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="muscle"
        placeholder="Enter muscle group"
        value={formData.muscle}
        onChange={handleChange}
      />
      <button className="btn-search" type="submit">
        Search
      </button>
    </form>
  );
};
export default FindExercisesForm;
