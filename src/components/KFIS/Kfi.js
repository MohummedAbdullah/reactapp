import React, { useState } from "react";
import KFImodal from "../KFImodal/KFImodal";
import GeneratedKfi from "../GeneratedKfi/GeneratedKfi";
import { Link } from "react-router-dom";
import "./Kfi.scss";
const Kfi = ({ handlebacktobudget, handleSaveAndNextKfi }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [generateKfi, setIsgenerateKfi] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleGenerateKFI = () => {
    setIsOpen(false);
    setIsgenerateKfi(true);
  };
  return (
    <>
      <div>
        {isOpen ? (
          <KFImodal
            handleCloseModal={handleCloseModal}
            handleGenerateKFI={handleGenerateKFI}
          />
        ) : generateKfi ? (
          <GeneratedKfi />
        ) : (
          <div className="noKfi">
            <img
              src="./no-kfi.jpeg"
              alt="User Avatar"
              className="img-size-100 mr-3 "
            />
            <div className="not-generated">No KFIs generated yet</div>
            <button className="register-kfi" onClick={handleOpenModal}>
              Generate Kfi
            </button>
          </div>
        )}
      </div>
      <div className="Kyc row">
        <div className="col-sm-6">
          <Link to="/ClientDetail">
            <h4 className="mt-20 text-dark">KYC Details</h4>
          </Link>
        </div>
        <div className="col-sm-6 ">
          <ol className="breadcrumb ">
            <li className="breadcrumb-item">
              <button
                className="save-Next"
                onClick={handleSaveAndNextKfi}
                disabled={!generateKfi}
              >
                Save & Next
              </button>
            </li>
          </ol>
          <ol className="breadcrumb ">
            <li className="breadcrumb-item">
              <span className="client-cancel">Save</span>
            </li>
          </ol>
          <ol className="breadcrumb ">
            <li className="breadcrumb-item">
              <button className="client-cancel" onClick={handlebacktobudget}>
                Back
              </button>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Kfi;
