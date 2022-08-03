import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const EditExercise = (props) => {
  const params = useParams();

  const [state, setState] = useState(() => {
    return {
      username: "",
      description: "",
      duration: 0,
      users: [],
    };
  });

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    axios
      .get("http://localhost:4000/exercises/" + params.id)
      .then((response) => {
        setState({
          username: response.data.username,
          description: response.data.description,
          duration: response.data.duration,
          date: response.data.date,
          users: [response.data.username],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function onChangeState(e) {
    const { name, value } = e.target;
    setState((previousState) => {
      return {
        ...previousState,
        [name]: value,
      };
    });
  }

  const onChangeDate = (date) => {
    setDate((prevDate) => {
      return (prevDate = date);
    });
  };

  function onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: state.username,
      description: state.description,
      duration: state.duration,
      date: date,
    };

    axios
      .post("http://localhost:4000/exercises/update/" + params.id, exercise)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  return (
    <div className="container-fluid">
      <h3>Edit Exercise Entry</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label>Username: </label>
          <select
            name="username"
            required
            className="form-control"
            value={state.username}
            onChange={onChangeState}
          >
            {state.users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-3">
          <label>Description: </label>
          <input
            name="description"
            type="text"
            required
            placeholder="What form of exercise did you do?"
            className="form-control"
            value={state.description}
            onChange={onChangeState}
          ></input>
        </div>
        <div className="mb-3">
          <label>Duration (in minutes): </label>
          <input
            name="duration"
            type="text"
            required
            className="form-control"
            value={state.duration}
            onChange={onChangeState}
          ></input>
        </div>

        <div className="mb-3">
          <label>Date: </label>
          <div>
            <DatePicker selected={date} onChange={onChangeDate} />
          </div>
        </div>
        <div className="mb-3">
          <input
            type="submit"
            value="Edit Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditExercise;
