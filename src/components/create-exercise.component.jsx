import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default function CreateExercise(props) {
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
    axios.get("http://localhost:4000/users/").then((response) => {
      if (response.data.length > 0) {
        setState({
          username: response.data[0].username,
          description: "",
          duration: 0,
          users: response.data.map((user) => user.username),
        });
      }
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
      .post("http://localhost:4000/exercises/add", exercise)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  return (
    <div className="container-fluid">
      <h3>Create New Exercise Entry</h3>
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
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

// const [username, setUsername] = useState("");
// const [description, setDescription] = useState("");
// const [duration, setDuration] = useState(0);
// const [date, setDate] = useState(new Date());
// const [users, setUsers] = useState([]);

// function onUsernameChange(e){
//   const {name, value} = e.target;
//   setUsername((prevName) => {
//     return
//   })
// }
