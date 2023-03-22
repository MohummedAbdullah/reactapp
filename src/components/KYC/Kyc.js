import React from "react";
import { useState } from "react";
import SquareRadio from "../SquareRadio/SquareRadio";
import { Row, Col } from "reactstrap";
import { Typography } from "@material-ui/core";
import { styled } from "@mui/material/styles";

import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import "./Kyc.scss";

const Kyc = () => {
  const [formData, setFormData] = useState({});
  const [selectedValue, setSelectedValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData, selectedValue);
  };

  const handleFieldChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
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
        <TextField
          className="fieldkyc"
          id="firstName"
          label="First Name"
          onChange={handleFieldChange}
        />
        <TextField
          className="fieldkyc"
          id="lastName"
          label="Last Name"
          onChange={handleFieldChange}
        />
        <TextField
          className="fieldkyc"
          id="outlined-required"
          label="First Name"
          onChange={handleFieldChange}
        />
        <TextField
          className="fieldkyc"
          id="clientsource"
          label="Client Source"
          onChange={handleFieldChange}
        />
        <TextField
          className="fieldkyc"
          id="reference"
          label="Reference "
          onChange={handleFieldChange}
        />
        <TextField
          className="fieldkyc"
          id="profession"
          label="Profession"
          // type="password"
          // autoComplete="current-password"
          onChange={handleFieldChange}
        />
        <TextField
          className="fieldkyc"
          id="email"
          label="Email"
          type="email"
          onChange={handleFieldChange}
        />
        <TextField
          className="fieldkyc"
          id="number"
          label="CNIC"
          type="number"
          onChange={handleFieldChange}
        />
        <div className="radio">
          <Typography variant="subtitle1">Residential Status:</Typography>

          <RadioGroup
            aria-label="Residential Status"
            name="controlled-radio-buttons-group"
            value={selectedValue}
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
              className="address"
              id="address"
              label="Adress"
              onChange={handleFieldChange}
            />
          </Col>
          <Col lg="4" sm="6">
            <TextField
              className="fieldkyc"
              id="country"
              label="Country"
              onChange={handleFieldChange}
            />
          </Col>
        </Row>
        <TextField id="city" label="City" onChange={handleFieldChange} />
        {/* <Button variant="contained" type="submit">
          Submit
        </Button> */}
      </div>
    </Box>
  );
};
export default Kyc;
