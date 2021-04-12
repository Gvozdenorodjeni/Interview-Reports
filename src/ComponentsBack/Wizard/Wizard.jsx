import React, { useState, useEffect } from "react";
import "./Wizard.scss";
import CardWiz from "../CardWiz/CardWiz";
import CompanyCard from "../CompanyCard/CompanyCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Wizard = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [phase, setPhase] = useState("");
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");

  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [inputValueCompany, setInputValueCompany] = useState("");

  const [createdReport, setCreatedReport] = useState({
    candidateId: null,
    candidateName: null,
    companyId: null,
    companyName: null,
    interviewDate: null,
    phase: null,
    status: null,
    note: null,
  });
  const gray = { color: "gray", fontWeight: 300 };
  console.log(createdReport);
  // CANDIDATES FILTER
  let filteredData = props.candidates.filter((e) =>
    e.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
  );
  // COMPANIES FILTER
  let filteredCompanyData = props.companies.filter((e) =>
    e.name.toLowerCase().includes(inputValueCompany.toLocaleLowerCase())
  );

  const addCandidate = (id, candidateName) => {
    setCreatedReport({
      ...createdReport,
      candidateId: id,
      candidateName: candidateName,
    });
  };

  const addCompany = (id, companyName) => {
    setCreatedReport({
      ...createdReport,
      companyId: id,
      companyName: companyName,
    });
  };

  const addInfoAndFetch = () => {
    setCreatedReport({
      ...createdReport,
      interviewDate: startDate,
      phase: phase,
      status: status,
      note: notes,
    });
  };

  //   -----WIZARD FIRST PAGE-----
  if (page === 1) {
    return (
      <div className="wizardCandidate">
        <div className="steps">
          <div>
            <div className="number no1">1</div>
            <h2>Select Candidate</h2>
          </div>
          <div>
            <div className="number" style={gray}>
              2
            </div>
            <h2 style={gray}>Select Company</h2>
          </div>
          <div>
            <div className="number" style={gray}>
              3
            </div>
            <h2 style={gray}>Fill Report Details</h2>
          </div>
        </div>
        <div className="wizardCandidates">
          <input
            placeholder="&#x2315; Search"
            className="searchWizard"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {filteredData.map((candidate) => (
            <CardWiz
              candidate={candidate}
              addCandidate={addCandidate}
              candidateId={createdReport.candidateId}
            />
          ))}
          <button
            className="wizardNext"
            onClick={() => {
              if (createdReport.candidateName) setPage(2);
              else alert("Please select candidate");
            }}
          >
            NEXT
          </button>
        </div>
      </div>
    );
    //   -----WIZARD SECOND PAGE-----
  } else if (page === 2) {
    return (
      <div className="wizardCandidate">
        <div className="steps">
          <div>
            <div className="number" style={gray}>
              1
            </div>
            <h2 style={gray}>Select Candidate</h2>
          </div>
          <div>
            <div className="number">2</div>
            <h2>Select Company</h2>
          </div>
          <div>
            <div className="number" style={gray}>
              3
            </div>
            <h2 style={gray}>Fill Report Details</h2>
          </div>
          <hr />
          <p>Candidate:</p>
          <h3>{createdReport.candidateName}</h3>
        </div>

        <div className="wizardCandidates">
          <input
            placeholder="&#x2315; Search"
            className="searchWizard"
            type="text"
            value={inputValueCompany}
            onChange={(e) => setInputValueCompany(e.target.value)}
          />
          {filteredCompanyData.map((company) => (
            <CompanyCard
              company={company}
              addCompany={addCompany}
              companyId={createdReport.companyId}
            />
          ))}
          <div className="backNextButtons">
            <button
              className="wizardNext back"
              onClick={() => {
                setPage(1);
              }}
            >
              BACK
            </button>
            <button
              className="wizardNext"
              onClick={() => {
                if (createdReport.companyName) setPage(3);
                else alert("Please select a company");
              }}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    );

    //   -----WIZARD THIRD PAGE-----
  } else if (page === 3) {
    return (
      <div className="wizardCandidate">
        <div className="steps">
          <div>
            <div className="number" style={gray}>
              1
            </div>
            <h2 style={gray}>Select Candidate</h2>
          </div>
          <div>
            <div className="number" style={gray}>
              2
            </div>
            <h2 style={gray}>Select Company</h2>
          </div>
          <div>
            <div className="number">3</div>
            <h2>Fill Report Details</h2>
          </div>
          <hr />
          <p>Candidate:</p>
          <h3>{createdReport.candidateName}</h3>
          <p>Company:</p>
          <h3>{createdReport.companyName}</h3>
        </div>
        <div className="thirdPageDiv">
          <div className="datePhaseStatus">
            <div className="date">
              <p>Date</p>
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  if (new Date() < date) alert("Pick a past date");
                  else setStartDate(date);
                }}
              />
            </div>
            <div className="phase">
              <p>Phase</p>
              <select onChange={(e) => setPhase(e.target.value)}>
                <option value="CV">CV</option>
                <option value="Technical">Technical</option>
                <option value="HR">HR</option>
              </select>
            </div>
            <div className="status">
              <p>Status</p>
              <select onChange={(e) => setStatus(e.target.value)}>
                <option value="Passed">Passed</option>
                <option value="Declined">Declined</option>
              </select>
            </div>
          </div>
          <div className="notes">
            <p>Notes:</p>
            <textarea
              name="notes"
              id=""
              cols="30"
              rows="10"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>
          <div className="backNextButtons">
            <button className="back wizardNext" onClick={() => setPage(2)}>
              BACK
            </button>
            <button className="wizardNext" onClick={() => addInfoAndFetch()}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Wizard;
