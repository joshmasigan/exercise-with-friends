import React from "react";
import { Link } from "react-router-dom";

function ExerciseObject(props) {
  function handleDelete() {
    props.delete(props.id);
  }
  return (
    <div className="mb-3">
      <h3>{props.name}</h3>
      <p>
        {props.desc} for {props.length} minutes completed on:{" "}
        {props.date.substring(0, 10)}
      </p>
      <div className="mb-3">
        <Link to={"/edit/" + props.id} className="btn btn-primary">
          Edit Exercise
        </Link>
        <button className="btn btn-secondary ms-2" onClick={handleDelete}>
          Delete Exercise
        </button>
      </div>
    </div>
  );
}

export default ExerciseObject;
