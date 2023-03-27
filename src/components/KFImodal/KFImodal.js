import React, { useState } from "react";
import "./KFImodal.scss";
import { Tabs, Tab } from "@material-ui/core";
import Box from "@mui/material/Box";
import RentalTabContent from "../RentalTabContent/RentalTabContent";

const KFImodal = ({ handleCloseModal }) => {
  const [kfitype, setKfitype] = useState(0);

  // const RentalTabContent = () => {
  //   return <div>Rental Tab Content</div>;
  // };

  const InstallmentTabContent = () => {
    return <div>Installment Tab Content</div>;
  };

  const handleChange = (event, newValue) => {
    setKfitype(newValue);
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
                <h1 className="m-0 text-dark">
                  Select Product to generate KFI.
                </h1>
              </div>
            </div>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={kfitype}
                onChange={handleChange}
                TabIndicatorProps={{ style: { backgroundColor: "#3fb56c" } }}
                textColor="primary"
                variant="fullWidth"
                aria-label="action tabs example"
              >
                <Tab label="Rental" />
                <Tab label="Installment" />
              </Tabs>
            </Box>
            {kfitype === 0 && <RentalTabContent />}
            {kfitype === 1 && <InstallmentTabContent />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default KFImodal;
