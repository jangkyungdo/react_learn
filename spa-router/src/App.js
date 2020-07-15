import React from "react";
import "./App.css";
import Home from "./Home";
import { Route, Link } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <Route path="/" exact={true} component={Home} />
      <Route path={["/about", "/info"]} component={About} />
    </div>
  );
}

export default App;
