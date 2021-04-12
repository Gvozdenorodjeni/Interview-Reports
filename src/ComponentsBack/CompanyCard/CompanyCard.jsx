import React, { useState, useEffect } from "react";
import "./CompanyCard.scss";

const CompanyCard = (props) => {
  return (
    <div
      className="cardWiz"
      onClick={() => props.addCompany(props.company.id, props.company.name)}
    >
      <div className="card-wrapperWiz">
        <div className="nameandemailWiz">
          <h3 className="nameWiz">{props.company.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
