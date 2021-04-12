import React, { useState, useEffect } from "react";
import "./CardWiz.scss";

const CardWiz = (props) => {
  const { candidate } = props;
  return (
    <div
      className="cardWiz"
      onClick={() => props.addCandidate(candidate.id, candidate.name)}
    >
      <div className="card-wrapperWiz">
        <img src={candidate.avatar} alt="avatar" />
        <div className="nameandemailWiz">
          <h3 className="nameWiz">{candidate.name}</h3>
          <p className="emailWiz">{candidate.email}</p>
        </div>
      </div>
    </div>
  );
};

export default CardWiz;
