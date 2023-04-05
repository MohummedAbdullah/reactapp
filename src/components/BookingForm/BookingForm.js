import React, { useState } from "react";
import GeneratedInventory from "../GeneratedInventory/GeneratedInventory";
import { Link } from "react-router-dom";
import "../KFIS/Kfi.scss";
import Bookingmodal from "../BookingFormModal/Bookingmodal";
const BookingForm = ({ handlebacktobudget, handleSaveAndNextKfi }) => {
  const [isOpenInventory, setIsOpenInventory] = useState(false);
  const [generateInventory, setIsgenerateInventory] = useState(false);
  const handleOpenModal = () => {
    setIsOpenInventory(true);
  };

  const handleCloseModal = () => {
    setIsOpenInventory(false);
  };

  const handleGenerateinventory = () => {
    setIsOpenInventory(false);
    setIsgenerateInventory(true);
  };
  return (
    <>
      <div>
        {isOpenInventory ? (
          <Bookingmodal
            handleCloseModal={handleCloseModal}
            handleGenerateinventory={handleGenerateinventory}
          />
        ) : generateInventory ? (
          <GeneratedInventory />
        ) : (
          <div className="noKfi">
            <img
              src="./no-kfi.jpeg"
              alt="User Avatar"
              className="img-size-100 mr-3 "
            />
            <div className="not-generated">No Inventory Selected</div>
            <button className="register-kfi" onClick={handleOpenModal}>
              Show Inventory
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
                disabled={!generateInventory}
              >
                Book Unit
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

export default BookingForm;
