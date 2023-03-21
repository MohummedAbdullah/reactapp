import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./RegisterClient.scss";
import PhoneInput from "react-phone-input-2";
import LeadRequirement from "../LeadRequirement/LeadRequirement";
import "react-phone-input-2/lib/style.css";
import { useState, useEffect } from "react";
const RegisterClient = () => {
  const [phone, setPhone] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showHeading, setShowHeading] = useState(false);

  const handlePhoneChange = (value) => {
    setPhone(value);
  };
  const handleAddLead = () => {
    setShowForm(!showForm);
    setShowHeading(true);
  };
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Register Client</h1>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          <Row>
            <Col sm="12" md="6" lg="6">
              <input
                placeholder="Full Name "
                type="text"
                name="fullname"
                // onChange={handleChange}
                // value={fullname}
                className="detail-input"
              />
            </Col>
            <Col sm="12" md="6" lg="6" className="mt-md-0 mt-3">
              <input
                placeholder="Phone Number*"
                name="phone"
                type="number"
                // onChange: handleChange,
                // value: phone,
                className="detail-input"
              />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6" lg="6" className="mt-md-0 mt-3">
              <PhoneInput
                country={"pk"}
                value={phone}
                onChange={handlePhoneChange}
                placeholder="Phone Number*"
                inputClass="detail-input"
              />
            </Col>
            <Col sm="12" md="6" lg="6" className="mt-md-0 mt-3">
              <input
                placeholder="Client Source"
                name="clientsource"
                type="text"
                // onChange: handleChange,
                // value: phone,
                className="client-input"
              />
            </Col>
          </Row>
          {!showHeading && (
            <button onClick={handleAddLead} className="leadRequirement">
              Add Lead Requirements
            </button>
          )}
          {showHeading && <h4 className="m-0 text-dark">Lead Requirements</h4>}
          {showForm && <LeadRequirement />}
        </div>
      </div>
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
                <a className="client-register">Register</a>
              </li>
            </Link>
            {/* <li className="breadcrumb-item active">Dashboard v1</li> */}
          </ol>
          <ol className="breadcrumb ">
            <Link to="/ClientData" className="nav-link">
              <li className="breadcrumb-item">
                <a className="client-cancel">Cancel</a>
              </li>
            </Link>
            {/* <li className="breadcrumb-item active">Dashboard v1</li> */}
          </ol>
        </div>
        {/* /.col */}
      </div>
    </div>
  );
};
export default RegisterClient;
