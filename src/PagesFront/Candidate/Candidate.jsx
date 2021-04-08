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
      <Modal open={isOpen}>ASD</Modal>
    </div>
  );
};

export default Candidate;
