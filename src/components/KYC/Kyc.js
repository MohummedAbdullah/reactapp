import React from "react";
import { useState } from "react";
import SquareRadio from "../SquareRadio/SquareRadio";
import { Row, Col } from "reactstrap";
import { Typography } from "@material-ui/core";
import { Box, FormControlLabel, RadioGroup, TextField } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Kyc.scss";

const Kyc = () => {
  const [phoneKYC, setPhoneKYC] = useState("");
  const [kycData, setKycData] = useState({});
  const [residency, setResidency] = useState("");
  const handlePhoneChange = (value) => {
    setPhoneKYC(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(kycData, residency);
  };

  const handleKycform = (event) => {
    setKycData({
      ...kycData,
      [event.target.id]: event.target.value,
    });
  };

  const handleRadioChange = (event) => {
    setResidency(event.target.value);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Row>
          <Col sm="12" md="4" lg="4" className="mt-md-0 mt-3">
            <TextField
              className="fieldkyc"
              id="firstName"
              label="First Name"
              onChange={handleKycform}
            />
          </Col>

          <Col sm="12" md="4" lg="4" className="mt-md-0 mt-3">
            <TextField
              className="fieldkyc"
              id="lastName"
              label="Last Name"
              onChange={handleKycform}
            />
          </Col>
          <Col sm="12" md="4" lg="4" className=" mt-2 pr-3">
            <PhoneInput
              country={"pk"}
              value={phoneKYC}
              onChange={handlePhoneChange}
              placeholder="Phone Number*"
              inputClass="detail-input"
            />
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="4" lg="4" className="mt-md-0 mt-3">
            <TextField
              className="fieldkyc"
              id="clientsource"
              label="Client Source"
              onChange={handleKycform}
            />
          </Col>
          <Col sm="12" md="4" lg="4" className="mt-md-0 mt-3">
            <TextField
              className="fieldkyc"
              id="reference"
              label="Reference "
              onChange={handleKycform}
            />
          </Col>
          <Col sm="12" md="4" lg="4" className="mt-md-0 mt-3 ml-n2">
            <TextField
              className="fieldkyc"
              id="profession"
              label="Profession"
              // type="password"
              // autoComplete="current-password"
              onChange={handleKycform}
            />
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="4" lg="4" className="mt-md-0 mt-3">
            <TextField
              className="fieldkyc"
              id="email"
              label="Email"
              type="email"
              onChange={handleKycform}
            />
          </Col>
          <Col sm="12" md="4" lg="4" className="mt-md-0 mt-3">
            <TextField
              className="fieldkyc"
              id="number"
              label="CNIC"
              type="number"
              onChange={handleKycform}
            />
          </Col>
          <Col sm="12" md="4" lg="4" className="mt-md-0 mt-3"></Col>
        </Row>
        <div className="radio">
          <Typography variant="subtitle1">Residential Status:</Typography>

          <RadioGroup
            aria-label="Residential Status"
            name="controlled-radio-buttons-group"
            value={residency}
            className="radio-options"
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="pakistani"
              control={<SquareRadio />}
              label="Pakistani"
            />
            <FormControlLabel
              value="overseaspakistani"
              control={<SquareRadio />}
              label="Overseas Pakistani"
            />
            <FormControlLabel
              value="homeowner"
              control={<SquareRadio />}
              label="HomeOwner"
            />
            <FormControlLabel
              value="familyhome"
              control={<SquareRadio />}
              label="Family Home"
            />
            <FormControlLabel
              value="tenant"
              control={<SquareRadio />}
              label="Tenant"
            />
          </RadioGroup>
        </div>
        <Row>
          <Col lg="8" sm="6">
            <TextField
              className="fieldkyc"
              id="address"
              label="Adress"
              onChange={handleKycform}
            />
          </Col>
          <Col lg="4" sm="6">
            <TextField
              className="fieldkyc"
              id="country"
              label="Country"
              onChange={handleKycform}
            />
          </Col>
        </Row>
        <Col lg="4" sm="6" className="ml-n2">
          <TextField
            className="fieldkyc"
            id="city"
            label="City"
            onChange={handleKycform}
          />
        </Col>
      </div>
    </Box>
  );
};
export default Kyc;
