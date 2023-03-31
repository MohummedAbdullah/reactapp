import React from "react";
import { FormControlLabel, RadioGroup, Box, TextField } from "@mui/material";

import { Row, Col } from "reactstrap";
import { useState } from "react";
import "../KYC/Kyc.scss";
import "./Rentalcontent.scss";

import SquareRadio from "../SquareRadio/SquareRadio";
const RentalTabContent = ({ handleGenerateKFI }) => {
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
        <RadioGroup
          aria-label="Residential Status"
          name="controlled-radio-buttons-group"
          value={rental}
          className="radio-options"
          onChange={handleRadioChange}
        >
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
        </RadioGroup>
      </div>
      <div className="investamount">
        <input
          disabled
          id="outlined-disabled"
          defaultValue="Invest Amount"
          className="investamount"
        />
      </div>
      <div className="row">
        <div className="col-sm-6"></div>
        <div className="col-sm-6 ">
          <button className="generate-kfi" onClick={handleGenerateKFI}>
            Generate KFIs
          </button>
        </div>
      </div>
    </div>
  );
};
export default RentalTabContent;
