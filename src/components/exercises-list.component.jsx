import React, { useState, useEffect } from "react";
import axios from "axios";
import ExerciseObject from "./exercise-object.component";

export default function ExercisesList(props) {
  const [exercises, setExercises] = useState({
    exerciseList: [],
  });
  useEffect(() => {
    axios
      .get("http://localhost:4000/exercises/")
      .then((response) => {
        setExercises({ exerciseList: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function deleteExercise(e) {
    console.log(e.id);
  }
  return (
    <div className="container-fluid">
      {exercises.exerciseList.map((exercise, index) => {
        return (
          <ExerciseObject
            key={index}
            name={exercise.username}
            desc={exercise.description}
            length={exercise.duration}
            date={exercise.date}
          />
        );
      })}
    </div>
  );
}
