import React from "react";
import { useState } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import "./GeneratedInventory.scss";
const GeneratedInventory = () => {
  const [budgetData, setBudgetData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(budgetData);
  };

  const handleBudgetform = (event) => {
    setBudgetData({
      ...budgetData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <div className="container-fluid mt-5 ml-2">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">Inventory Info</h1>
          </div>
        </div>
      </div>
      <Box>
        <Row className="container-fluid  mt-3 ml-2">
          <Col lg="3">Project</Col>
          <Col lg="3">Unique Code</Col>
          <Col lg="3">Name</Col>
          <Col lg="3">Inventory</Col>
        </Row>
        <Row className="container-fluid mt-3 ml-2">
          <Col lg="3">Type</Col>
          <Col lg="3">Rooms</Col>
          <Col lg="3">Washrooms</Col>
          <Col lg="3">Rate/Sqft</Col>
        </Row>
      </Box>
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
          <div className="container-fluid  ml-2">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Product Types</h1>
              </div>
            </div>
          </div>
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
          <div className="container-fluid  ml-2">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Customer Information</h1>
              </div>
            </div>
          </div>
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
        </div>
      </Box>
    </>
  );
};
export default GeneratedInventory;
