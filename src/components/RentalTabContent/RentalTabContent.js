import React from "react";
import { FormControlLabel, RadioGroup, TextField } from "@mui/material";
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
    <>
      <div>Rental Tab Content</div>
      <div className="radio">
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
            label={
              <div
                style={{ fontWeight: "bold", fontSize: 18 }}
              >{`Data: ${data}, ${highappreciation}`}</div>
            }
          />
          <FormControlLabel
            value="lols"
            control={<SquareRadio />}
            // label="Overseas Pakistani"
            label={
              <div
                className="rentalData"
                // style={{ fontWeight: "bold", fontSize: 18 }}
              >
                <div>{`Appreciation: ${data}% to ${highdata}`}</div>
                <div>{` Elite Offer`}</div>
                <div>{` Reference # 346712`}</div>
              </div>
            }
          />
        </RadioGroup>
      </div>
    </>
  );
};
export default RentalTabContent;
