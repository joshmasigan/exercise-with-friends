import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercises from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUsers from "./components/create-users.component";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <br />
        <Routes>
          <Route path="/" exact element={<ExercisesList />} />
          {/* <Route
            path="/edit/:id"
            render={(props) => <EditExercises {...props} />}
          /> */}
          <Route path="/edit/:id" element={<EditExercises />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/users" element={<CreateUsers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
