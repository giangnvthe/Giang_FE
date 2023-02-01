import Kanban from "../components/Sections/Kanban";
import Sidebar from "../components/Nav/Sidebar";
import Landing from "../screens/Landing"
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


        </Switch>
      </Sidebar>
    </Router>
  );
}