import React from "react";
import "./Candidate.scss";
import { useState, useEffect } from "react";

const Candidate = (props) => {
  console.log(props, "OVAJJJ");
  return <div className="candidate">{props.location.candidate.name}</div>;
};

export default Candidate;
