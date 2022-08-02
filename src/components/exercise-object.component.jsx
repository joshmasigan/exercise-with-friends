import React from "react";

function ExerciseObject(props) {
  function handleDelete() {
    props.delete(props.id);
  }
  return (
    <div className="mb-3">
      <h3>{props.name}</h3>
      <p>
        {props.desc} for {props.length} minutes
      </p>
      <p>completed on: {props.date}</p>
      <div className="mb-3">
        <button className="btn-primary" onClick={handleDelete}>
          Delete Exercise
        </button>
        <button className="btn-secondary">Edit Exercise</button>
      </div>
    </div>
  );
}

export default ExerciseObject;
