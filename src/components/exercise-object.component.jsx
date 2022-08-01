import React from "react";

function ExerciseObject(props) {
  return (
    <div className="mb-3">
      <h3>{props.name}</h3>
      <p>
        {props.desc} for {props.length} minutes
      </p>
      <p>completed on: {props.date}</p>
    </div>
  );
}

export default ExerciseObject;
