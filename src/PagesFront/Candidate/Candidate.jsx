import React from "react";
import "./Candidate.scss";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const Candidate = (props) => {
  const candidate = props.candidates.find((e) => props.match.params.id == e.id);
  const reports = props.reports.filter(
    (e) => props.match.params.id == e.candidateId
  );

  console.log(candidate, reports);
  return candidate && reports ? (
    <div className="singlecandidatediv">
      <div className="infodiv">
        <img src={candidate.avatar} alt="" />
        <div className="nameemaildiv">
          <h6>Name:</h6>
          <h3>{candidate.name}</h3>
          <h6>Email:</h6>
          <h3>{candidate.email}</h3>
        </div>
        <div className="dateeducationdiv">
          <h6>Date:</h6>
          <h3>
            {new Date(candidate.birthday).getDate() +
              " " +
              new Date(candidate.birthday).getMonth() +
              " " +
              new Date(candidate.birthday).getFullYear()}
          </h3>
          <h6>Education:</h6>
          <h3>{candidate.education}</h3>
        </div>
      </div>
      <h2>Reports</h2>
      <table>
        <thead>
          <tr>
            <td>Company</td>
            <td>Interview Date</td>
            <td colspan="2">Status</td>
          </tr>
        </thead>

        <tbody>
          {reports.map((e) => (
            <tr key={uuid()}>
              <td>{e.companyName}</td>
              <td>
                {new Date(e.interviewDate).getDate() +
                  " " +
                  new Date(e.interviewDate).getMonth() +
                  " " +
                  new Date(e.interviewDate).getFullYear()}
              </td>
              <td>{e.status}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

export default Candidate;
