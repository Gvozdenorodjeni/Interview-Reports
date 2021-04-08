import React from "react";
import "./Candidates.scss";
import Card from "../../ComponentsFront/Card/Card";
import HeaderFront from "../../ComponentsFront/HeaderFront/HeaderFront";
const Candidates = (props) => {
  return (
    <>
      <HeaderFront />
      <div className="candidatesdiv">
        {props.candidates.map((e) => (
          <Card
            candidate={e}
            candidates={props.candidates}
            reports={props.reports}
          />
        ))}
      </div>
    </>
  );
};

export default Candidates;
