import React from "react";

import "./Modal.scss";

interface Props {
  children: React.ReactNode;
}

export const Modal = ({ children }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#Mdl");
    modal?.classList.add("hide");
  };

  return (
    <div className="Modal hide" id="Mdl">
      <div className="Modal__fade" onClick={closeModal}></div>
      <div className="Modal__modal">
        <h2>Texto modal</h2>
        {children}
      </div>
    </div>
  );
};
