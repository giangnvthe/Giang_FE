import Kanban from "../components/Sections/Kanban";
import Sidebar from "../components/Nav/Sidebar";
import Note from "../components/Sections/Note";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




export default function TaskManagement() {
  return (
    <Router>

      <Sidebar>
        <Switch>
          {/* Task */}
          <Route path="/task">
            <Kanban />
          </Route>
          {/* Task */}
          <Route path="/notes">
            <Note />
          </Route>

        </Switch>
      </Sidebar>
    </Router>
  );
}