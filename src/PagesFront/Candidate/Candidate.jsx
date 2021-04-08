import React from "react";
import "./Candidate.scss";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import Modal from "../../ComponentsFront/Modal/Modal";

const Candidate = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const candidate = props.candidates.find((e) => props.match.params.id == e.id);
  const reports = props.reports.filter(
    (e) => props.match.params.id == e.candidateId
  );

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
              (new Date(candidate.birthday).getMonth() + 1) +
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
                  1 +
                  " " +
                  new Date(e.interviewDate).getFullYear()}
              </td>
              <td>{e.status}</td>
              <td>
                <div className="candidate">
                  <i class="fas fa-eye" onClick={() => setIsOpen(true)}></i>
                  <Modal onClose={() => setIsOpen(false)} open={isOpen}>
                    {console.log(e)}
                    <h2>{candidate.name}</h2>
                    <hr />
                    <div className="modalInfo">
                      <div className="personalInfo">
                        <p>Company</p>
                        <h2>{e.companyName}</h2>
                        <p>Interview Date</p>
                        <h2>
                          {new Date(e.interviewDate).getDate() +
                            " " +
                            new Date(e.interviewDate).getMonth() +
                            1 +
                            " " +
                            new Date(e.interviewDate).getFullYear()}
                        </h2>
                        <p>Phase</p>
                        <h2>{e.phase}</h2>
                        <p>Status</p>
                        <h2>{e.status}</h2>
                      </div>
                      <div className="modalNotes">
                        <p>Notes</p>
                        <p className="personalNote">{e.note}</p>
                      </div>
                    </div>
                  </Modal>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

export default Candidate;
