import React, { useState } from "react";
import "./Candidates.scss";
import Card from "../../ComponentsFront/Card/Card";
import HeaderFront from "../../ComponentsFront/HeaderFront/HeaderFront";

const Candidates = (props) => {
  const [inputValue, setInputValue] = useState("");
  let filteredData = props.candidates.filter((e) =>
    e.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
  );
  console.log(inputValue);

  return (
    <>
      <HeaderFront />
      <div className="searchCandidates">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search"
          type="text"
        />
      </div>
      <div className="candidatesdiv">
        {filteredData.map((e) => (
          <Card
            candidate={e}
            candidates={filteredData}
            reports={props.reports}
          />
        ))}
      </div>
    </>
  );
};

export default Candidates;
