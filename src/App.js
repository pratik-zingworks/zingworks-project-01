import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import SignUp from './components/SignUp/SignUp.component';
import SignIn from "./components/SignIn/SignIn.component"

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
    </Router>
     
    </div>
  );
}

export default App;
