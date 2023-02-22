import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import About from "../src/components/About/About";
import Contact from "../src/components/Contact/Contact";
import Skills from "../src/components/Skills/Skills";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
