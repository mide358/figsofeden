import TheNav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <TheNav />
        <div className="content">
          <Switch>
            <Route exact path="/"></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
