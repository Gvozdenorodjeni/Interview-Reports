import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

import Candidates from "./PagesFront/Candidates/Candidates";
import Candidate from "./PagesFront/Candidate/Candidate";

function App() {
  const [candidates, setCandidates] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then((data) => data.json())
      .then((data) => setCandidates(data));
    fetch("http://localhost:3333/api/reports")
      .then((data) => data.json())
      .then((data) => setReports(data));
  }, []);
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Candidates candidates={candidates} reports={reports} />}
      />
      <Route
        path="/candidate/:id"
        render={(routeInfo) => (
          <Candidate {...routeInfo} candidates={candidates} reports={reports} />
        )}
      ></Route>
    </Switch>
  );
}

export default App;
