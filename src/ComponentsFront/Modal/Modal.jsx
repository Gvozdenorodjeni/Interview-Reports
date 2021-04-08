import React from "react";
import ReactDom from "react-dom";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal">
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
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
