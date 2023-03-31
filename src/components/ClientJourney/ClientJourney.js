import React from "react";
import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";
// import { Link } from "react-router-dom";
import Kyc from "../KYC/Kyc";
import Kfi from "../KFIS/Kfi";
import BookingForm from "../BookingForm/BookingForm";
import BudgetPlanning from "../BudgetPlanning/BudgetPlanning";
import "./ClientJourney.scss";
const ClientJourney = () => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [kyc, setKyc] = useState(false);
  const [kfi, setKfi] = useState(false);
  const [budgetplanning, setBudgetPlanning] = useState(false);
  const [bookingForm, setBookingForm] = useState(false);

  const [isSliderDisabled, setIsSliderDisabled] = useState(true);

  const handleSliderChange = (event, newValue) => {
    setSelectedValue(newValue);
  };
  const handleSaveAndNextKyc = () => {
    console.log("save&nextkyc clicked");
    setSelectedValue(14);
    // setIsSliderDisabled(true);
  };

  const handleSaveAndNextBudget = () => {
    setSelectedValue(56);
    // setIsSliderDisabled(true);
  };
  const handleSaveAndNextKfi = () => {
    setSelectedValue(70);
    // setIsSliderDisabled(true);
  };
  const handlebacktobudget = () => {
    setSelectedValue(14);
  };
  const handlebacktokyc = () => {
    setSelectedValue(0);
    // setIsSliderDisabled(false);
  };
  useEffect(() => {
    if (selectedValue === 0) {
      setKyc(true);
      setKfi(false);
      setBudgetPlanning(false);
      setBookingForm(false);
    }
    if (selectedValue === 14) {
      setBudgetPlanning(true);
      setKyc(false);
      setKfi(false);
      setBookingForm(false);
    }
    if (selectedValue === 56) {
      setKfi(true);
      setBudgetPlanning(false);
      setKyc(false);
      setBookingForm(false);
    }
    if (selectedValue === 70) {
      setBookingForm(true);
      setBudgetPlanning(false);
      setKyc(false);
      setKfi(false);
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
                className="Slider-journey"
                defaultValue={0}
                value={selectedValue}
                onChange={handleSliderChange}
                marks={[
                  { value: 0, label: "KYC" },
                  { value: 14, label: "Budget Planning" },
                  { value: 28, label: "IPM" },
                  { value: 42, label: "Client Preference" },
                  { value: 56, label: "KFIs" },
                  { value: 70, label: "Booking Form" },
                  { value: 84, label: "Receiving Report" },
                  { value: 100, label: "Agreement" },
                ]}
                disabled={isSliderDisabled}
              />
              {kyc && <Kyc handleSaveAndNextKyc={handleSaveAndNextKyc} />}
              {budgetplanning && (
                <BudgetPlanning
                  handleSaveAndNextBudget={handleSaveAndNextBudget}
                  handlebacktokyc={handlebacktokyc}
                />
              )}
              {kfi && (
                <Kfi
                  handlebacktobudget={handlebacktobudget}
                  handleSaveAndNextKfi={handleSaveAndNextKfi}
                />
              )}
              {kfi && (
                <Kfi
                  handlebacktobudget={handlebacktobudget}
                  handleSaveAndNextKfi={handleSaveAndNextKfi}
                />
              )}
              {bookingForm && <BookingForm />}
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClientJourney;
