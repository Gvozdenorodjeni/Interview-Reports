import React from "react";
import "./Candidate.scss";
import { useState, useEffect } from "react";

import Modal from "../../ComponentsFront/Modal/Modal";

const Candidate = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(props);
  return (
    <div className="candidate">
      <i class="fas fa-eye" onClick={() => setIsOpen(true)}></i>
      <Modal onClose={() => setIsOpen(false)} open={isOpen}>
        <h2>John Doe</h2>
        <hr />
        <div className="modalInfo">
          <div className="personalInfo">
            <p>Company</p>
            <h2>Google</h2>
            <p>Interview Date</p>
            <h2>20.12.2009</h2>
            <p>Phase</p>
            <h2>Tech</h2>
            <p>Status</p>
            <h2>Passed</h2>
          </div>
          <div className="modalNotes">
            <p>Notes</p>
            <p className="personalNote">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In dicta
              voluptatum maxime officia eveniet alias, excepturi, incidunt non
              quaerat cumque doloremque, odio itaque quas! Magni ducimus iste id
              veritatis. Temporibus!
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Candidate;
