import React from "react";

export default function Modal({ isShown, setShown, children }) {
  return (
    <div
      className="modal-container"
      style={{ display: isShown ? "block" : "none" }}
    >
      <div className="modal">
        <div className="modal-header row">
          <a onClick={() => setShown(false)}>
            <img style={{ width: "1.5em" }} src="/close.svg" />
          </a>
        </div>
        <br />
        <hr />
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
