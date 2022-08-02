import React, { useState, useEffect } from "react";
import axios from "axios";
import ExerciseObject from "./exercise-object.component";

export default function ExercisesList(props) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/exercises/")
      .then((response) => {
        setExercises(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function deleteExercise(id) {
    axios
      .delete("http://localhost:4000/exercises/" + id)
      .then((res) => console.log(res.data));
    setExercises(
      exercises.filter((item) => {
        if (item._id != id) {
          return item;
        }
      })
    );
  }
  return (
    <div className="container-fluid">
      {exercises.map((exercise, index) => {
        return (
          <ExerciseObject
            id={exercise._id}
            key={index}
            name={exercise.username}
            desc={exercise.description}
            length={exercise.duration}
            date={exercise.date}
            delete={deleteExercise}
          />
        );
      })}
    </div>
  );
}
