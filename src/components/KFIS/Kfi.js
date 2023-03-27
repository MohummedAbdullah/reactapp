import React, { useState } from "react";
import KFImodal from "../KFImodal/KFImodal";
import "./Kfi.scss";
const Kfi = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen ? (
        <KFImodal handleCloseModal={handleCloseModal} />
      ) : (
        <div>
          <div>No Kfi generated yet</div>
          <button onClick={handleOpenModal}>Generate Kfi</button>
        </div>
      )}
    </div>
  );
};

export default Kfi;
