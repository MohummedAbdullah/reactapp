import React from "react";
import { useState } from "react";
import { Row, Col } from "reactstrap";
import SquareRadio from "../SquareRadio/SquareRadio";
import { Typography } from "@material-ui/core";
import { Box, FormControlLabel, RadioGroup, TextField } from "@mui/material";
import "./BudgetPlanning.scss";
const BudgetPlanning = () => {
  const [budgetData, setBudgetData] = useState({});
  const [propertiesown, setPropertiesOwn] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(budgetData, propertiesown);
  };

  const handleBudgetform = (event) => {
    setBudgetData({
      ...budgetData,
      [event.target.id]: event.target.value,
    });
  };

  const handleRadioChangeBudget = (event) => {
    setPropertiesOwn(event.target.value);
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
          <Col lg="6" sm="12">
            <TextField
              className="budgetkyc"
              id="netincome"
              label="Net Monthly Income & Annual Income"
              onChange={handleBudgetform}
            />
          </Col>
          <Col lg="6" sm="12">
            <TextField
              className="budgetkyc"
              id="income&expense"
              label="Monthly Income & Expense"
              onChange={handleBudgetform}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="12" sm="12">
            <TextField
              className="budgetkyc"
              id="savings"
              label="Savings"
              onChange={handleBudgetform}
            />
          </Col>
        </Row>
        <div className="radio">
          <Typography variant="subtitle1">Other Properties Owned:</Typography>

          <RadioGroup
            aria-label="Residential Status"
            name="controlled-radio-buttons-group"
            value={propertiesown}
            className="radio-options"
            onChange={handleRadioChangeBudget}
          >
            <FormControlLabel
              value="yes"
              control={<SquareRadio />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<SquareRadio />}
              label="No "
            />
          </RadioGroup>
        </div>
        <Typography variant="subtitle1">Monthly Budget Planner:</Typography>

        <Row>
          <Col lg="6" sm="6">
            <TextField
              className="budgetkyc"
              id="rent"
              label="Rent / Mortage"
              onChange={handleBudgetform}
            />
          </Col>
          <Col lg="6" sm="6">
            <TextField
              className="budgetkyc"
              id="repairs"
              label="Repairs"
              onChange={handleBudgetform}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="12" sm="12">
            <TextField
              className="budgetkyc"
              id="details"
              label="Details"
              onChange={handleBudgetform}
              multiline
              rows={4}
              // style={{ height: "120px", width: "100%" }}
            />
          </Col>
        </Row>
      </div>
    </Box>
  );
};
export default BudgetPlanning;
