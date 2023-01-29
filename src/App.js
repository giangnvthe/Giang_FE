import React from "react";

// Screens
import Landing from "./screens/Landing.jsx";
import Login from "./screens/Login.jsx";

//Library
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



export default function App() {
  return (
    <>
<<<<<<< Updated upstream
=======
    
>>>>>>> Stashed changes
      <Router>
        <Switch>

          {/* Login */}
          <Route path="/login">
            <Login />
          </Route>

          {/* Landing */}
          <Route path="/">
            <Landing />
          </Route>

        </Switch>
      </Router>
    </>

  );
}

