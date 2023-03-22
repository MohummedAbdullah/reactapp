import React from "react";
import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Kyc from "../KYC/Kyc";
import BudgetPlanning from "../BudgetPlanning/BudgetPlanning";
import "./ClientJourney.scss";
const ClientJourney = () => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [kyc, setKyc] = useState(false);
  const [budgetplanning, setBudgetPlanning] = useState(false);

  const handleSliderChange = (event, newValue) => {
    setSelectedValue(newValue);
  };

  useEffect(() => {
    if (selectedValue === 0) {
      setKyc(true);
      setBudgetPlanning(false);
    }
    if (selectedValue === 10) {
      setBudgetPlanning(true);
      setKyc(false);
    }
  }, [selectedValue]);
  return (
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Client Journey</h1>
              </div>
              {/* State management: Another option is to use a state management library like
               Redux to store the form data in a global state. When you submit the form,
                you can dispatch an action to update the state,
               and then access the state in the receiving component to get the form data.  or queryparameters*/}

              {/* /.col */}
            </div>
            {/* /.row */}
            <Box>
              <Slider
                defaultValue={0}
                value={selectedValue}
                onChange={handleSliderChange}
                marks={[
                  { value: 0, label: "KYC" },
                  { value: 10, label: "Budget Planning" },
                  { value: 20, label: "Mark 3" },
                ]}
              />
              {kyc && <Kyc />}
              {budgetplanning && <BudgetPlanning />}
              {/* <Box>New Form Here</Box>} */}
            </Box>
            <div className="Kyc row">
              <div className="col-sm-6">
                <Link to="/ClientDetail">
                  <h4 className="mt-20 text-dark">KYC Details</h4>
                </Link>
              </div>
              {/* /.col */}
              <div className="col-sm-6 ">
                <ol className="breadcrumb ">
                  <Link to="/ClientDetail" className="nav-link">
                    <li className="breadcrumb-item">
                      <a className="client-register">Save & Next</a>
                    </li>
                  </Link>
                  {/* <li className="breadcrumb-item active">Dashboard v1</li> */}
                </ol>
                <ol className="breadcrumb ">
                  <Link to="/ClientData" className="nav-link">
                    <li className="breadcrumb-item">
                      <a className="client-cancel">Save</a>
                    </li>
                  </Link>
                  {/* <li className="breadcrumb-item active">Dashboard v1</li> */}
                </ol>
              </div>
              {/* /.col */}
            </div>
          </div>
          {/* /.container-fluid */}
        </div>
      </div>
    </div>
  );
};
export default ClientJourney;
// import { useState, useEffect } from 'react';
// import Slider from '@mui/material/Slider';
// import { Box } from '@mui/material';

// function MySlider() {
//   const [selectedValue, setSelectedValue] = useState(0);
//   const [showForm, setShowForm] = useState(false);

//   const handleSliderChange = (event, newValue) => {
//     setSelectedValue(newValue);
//   };

//   useEffect(() => {
//     if (selectedValue === 1) {
//       setShowForm(true);
//     }
//   }, [selectedValue]);

//   return (
//     <Box>
//       <Slider
//         defaultValue={0}
//         value={selectedValue}
//         onChange={handleSliderChange}
//         marks={[
//           { value: 0, label: 'Mark 1' },
//           { value: 1, label: 'Mark 2' },
//           { value: 2, label: 'Mark 3' },
//         ]}
//       />
//       {showForm && <Box>New Form Here</Box>}
//     </Box>
//   );
// }
