import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { candidate, reports } = props;
  return (
    <div className="card">
      <div className="card-wrapper">
        <img src={candidate.avatar} alt="avatar" />
        <div className="nameandemail">
          <p className="name">{candidate.name}</p>
          <p className="email">{candidate.email}</p>
        </div>
      </div>
      <Link
        to={{
          pathname: `/candidate/${candidate.id}`,
          reports: reports,
          candidate: candidate,
        }}
      >
        <button className="infoButton">Info</button>
      </Link>
    </div>
  );
};

export default Card;
