import React, { useState, useEffect } from "react";
import "./Wizard.scss";
import CardWiz from "../CardWiz/CardWiz";
import CompanyCard from "../CompanyCard/CompanyCard";

const Wizard = (props) => {
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
  console.log(createdReport);
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
          <hr />
          <p>Candidate:</p>
          <h3>{createdReport.candidateName}</h3>
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
          <div className="backnextbuttons">
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
  }
};

export default Wizard;
