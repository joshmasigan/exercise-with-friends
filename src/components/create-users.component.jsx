import React, { useState } from "react";
import axios from "axios";

export default function CreateUsers() {
  const [username, setUser] = useState("");

  function onChangeUser(e) {
    setUser(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username: username,
    };
    console.log(user);
    axios
      .post("http://localhost:4000/users/add", user)
      .then((res) => console.log(res.data));
    setUser("");
  }

  return (
    <div className="container-fluid">
      <h3>Add a new user</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label>Username: </label>
          <input
            name="username"
            type="text"
            required
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={onChangeUser}
          ></input>
        </div>
        <button className="btn btn-primary" type="submit" onClick={onSubmit}>
          Create User
        </button>
      </form>
    </div>
  );
}
