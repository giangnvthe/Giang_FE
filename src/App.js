import React from "react";

// Screens
//import Landing from "./screens/Landing.jsx";
import Landing from "./screens/Landing.jsx";
import Login from "./screens/Login.jsx";
import Register  from "./screens/Register.jsx";

//Library
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import TaskManagement from "./screens/TaskManagement.jsx";

export default function App() {
  return (
    <>
      <Router>
        <Switch>

          {/* Login */}
          <Route path="/task">
            <TaskManagement />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          {/* Register */}
          <Route path="/register">
            <Register />
          </Route>


          {/* Landing */}
          <Route exact path="/">
            <Landing />
          </Route>

          
        </Switch>
      </Router>
    </>

  );
}

