import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderFront from "./ComponentsFront/HeaderFront/HeaderFront";
import Candidates from "./PagesFront/Candidates/Candidates";
import Candidate from "./PagesFront/Candidate/Candidate";
import LoginPage from "./PagesBack/LoginPage/Login";
import Reports from "./ComponentsBack/Reports/Reports";

function App() {
  const [candidates, setCandidates] = useState([]);
  const [reports, setReports] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then((data) => data.json())
      .then((data) => setCandidates(data));
    fetch("http://localhost:3333/api/reports")
      .then((data) => data.json())
      .then((data) => setReports(data));
  }, []);
  return (
    <>
      <HeaderFront token={token} setToken={setToken} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Candidates candidates={candidates} reports={reports} />
          )}
        />
        <Route
          path="/candidate/:id"
          render={(routeInfo) => (
            <Candidate
              {...routeInfo}
              candidates={candidates}
              reports={reports}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={() => <LoginPage setToken={setToken} />}
        />
        <Route
          exact
          path="/reports"
          render={() => <Reports reports={reports} />}
        />
      </Switch>
    </>
  );
}

export default App;
