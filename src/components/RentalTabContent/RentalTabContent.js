import React from "react";
import { FormControlLabel, RadioGroup, TextField } from "@mui/material";
import { Row, Col } from "reactstrap";
import { useState } from "react";
import "../KYC/Kyc.scss";
import "./Rentalcontent.scss";

import SquareRadio from "../SquareRadio/SquareRadio";
const RentalTabContent = () => {
  const [rental, setRental] = useState("");
  const handleRadioChange = (event) => {
    setRental(event.target.value);
  };
  const data = 18;
  const highdata = 20;
  const moreData = "Hello World!";
  const highappreciation = "High Appreciation";
  return (
    <div id="rentaltab">
      {/* <div>Rental Tab Content</div> */}
      <div className="radio ">
        {/* <Row>
          <Col lg="12"> */}
        <RadioGroup
          aria-label="Residential Status"
          name="controlled-radio-buttons-group"
          value={rental}
          className="radio-options"
          onChange={handleRadioChange}
        >
          {/* <Row>
                <Col lg="3"> */}
          <FormControlLabel
            value="overseaspakistani"
            control={<SquareRadio />}
            // label="Overseas Pakistani"
            className="customLabelClass"
            label={
              <div className="rentalData">
                <div className="appreciation">{`Appreciation: ${data}% to ${highdata}`}</div>
                <div className="eliteOffer">{` Elite Offer`}</div>
                <div>{` Reference # 346712`}</div>
              </div>
            }
          />
          {/* </Col>
                <Col lg="3"> */}
          <FormControlLabel
            value="lols1"
            control={<SquareRadio />}
            // label="Overseas Pakistani"
            className="customLabelClass"
            label={
              <div className="rentalData">
                <div className="appreciation">{`Appreciation: ${data}% to ${highdata}`}</div>
                <div className="eliteOffer">{` Elite Offer`}</div>
                <div>{` Reference # 346712`}</div>
              </div>
            }
          />
          {/* </Col>
                <Col lg="3"> */}
          <FormControlLabel
            value="lols2"
            control={<SquareRadio />}
            // label="Overseas Pakistani"
            className="customLabelClass"
            label={
              <div className="rentalData">
                <div className="appreciation">{`Appreciation: ${data}% to ${highdata}`}</div>
                <div className="eliteOffer">{` Elite Offer`}</div>
                <div>{` Reference # 346712`}</div>
              </div>
            }
          />
          {/* </Col>
                <Col lg=""> */}
          <FormControlLabel
            value="lols3"
            control={<SquareRadio />}
            // label="Overseas Pakistani"
            className="customLabelClass"
            label={
              <div className="rentalData">
                <div className="appreciation">{`Appreciation: ${data}% to ${highdata}`}</div>
                <div className="eliteOffer">{` Elite Offer`}</div>
                <div>{` Reference # 346712`}</div>
              </div>
            }
          />
          {/* </Col>
              </Row> */}
        </RadioGroup>
        {/* </Col>
        </Row> */}
        {/* <Col>kiaa bkwaas h</Col> */}
      </div>
    </div>
  );
};
export default RentalTabContent;
