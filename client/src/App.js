import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from "./pages/Movies";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route exact path="/movies" component={Movies} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
