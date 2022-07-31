import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ExercisesList(props) {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/exercises/").then((response) => {
      if (response.data.length > 0) {
      }
    });
  }, []);
  return (
    <div>
      <p>You are on the Exercises List component!</p>
    </div>
  );
}
