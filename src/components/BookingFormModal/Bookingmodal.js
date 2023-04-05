import React, { useState } from "react";
import "./Bookingmodal.scss";
import { Tabs, Tab } from "@material-ui/core";
import Box from "@mui/material/Box";
import RentalTabContent from "../RentalTabContent/RentalTabContent";
import InstallmentInventory from "../InstallmentInventory/InstallmentInventory";
const Bookingmodal = ({ handleCloseModal, handleGenerateinventory }) => {
  const [bookingtype, setBookingtype] = useState(1);

  // const RentalTabContent = () => {
  //   return <div>Rental Tab Content</div>;
  // };

  const handleChange = (event, newValue) => {
    setBookingtype(newValue);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        {/* <div> */}
        {/* {" "} */}
        <span className="close" onClick={handleCloseModal}>
          &times;
        </span>
        {/* </div> */}
        {/* <div className="content-wrapper"> */}
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Select Inventory.</h1>
              </div>
            </div>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={bookingtype}
                onChange={handleChange}
                TabIndicatorProps={{ style: { backgroundColor: "#3fb56c" } }}
                textColor="primary"
                variant="fullWidth"
                aria-label="action tabs example"
              >
                <Tab label="Rental/Appreciation" />
                <Tab label="Installment" />
              </Tabs>
            </Box>
            {bookingtype === 0 && (
              <RentalTabContent
                handleGenerateinventory={handleGenerateinventory}
              />
            )}
            {bookingtype === 1 && (
              <InstallmentInventory
                handleGenerateinventory={handleGenerateinventory}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bookingmodal;
