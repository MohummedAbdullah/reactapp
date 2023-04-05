import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../KYC/Kyc.scss";
import "../InstallmentTabContent/Installmentcontent.scss";
import "./InstallmentInventory.scss";
const InstallmentInventory = ({ handleGenerateinventory }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleCityFilter = (project) => {
    // added for city filters
    if (project === selectedProject) {
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
    }
  };
  const [selectedPurpose, setSelectedPurpose] = useState(null);
  const [isBorderPurpose, setIsBorderPurpose] = useState(false);

  const [project, setProject] = useState("");

  const handleClickPropertyPurpose = (event) => {
    setIsBorderPurpose(true);
    setSelectedPurpose(event.target.value);
    // console.log("whats the purpose", event.target.value);
  };
  const data = [
    {
      id: 4124112,
      projectName: "Golf Floras",
      floor: "2nd",
      rate: "PKR 26,000",
      size: "3500 Sq.ft",
      total: "PKR 16,000,00",
    },
    {
      id: 4124113,
      projectName: "Mall Of Imarat",
      floor: "3rd",
      rate: "PKR 10,000",
      size: "2500 Sq.ft",
      total: "PKR 15,000,00",
    },
    {
      id: 4124114,
      projectName: "Mall Of Arabia",
      floor: "4th",
      rate: "PKR 19,000",
      size: "3000 Sq.ft",
      total: "PKR 17,000,00",
    },
    {
      id: 4124115,
      projectName: "Amazon Outlet Mall",
      floor: "1st",
      rate: "PKR 10,0000",
      size: "4000 Sq.ft",
      total: "PKR 20,000,00",
    },
  ];
  return (
    <div className="installment-modal" id="Inventory">
      <div className="content-header">
        <div className="container-fluid">
          <div className="Projects">
            <button
              className={`projects-type ${
                selectedProject === "Mall Of IMARAT" ? "selected-option" : null
              }`}
              onClick={() => handleCityFilter("Mall Of IMARAT")}
            >
              Price
            </button>
            <FormControl fullWidth>
              <InputLabel id="property-purpose-label">Price</InputLabel>
              <Select
                labelId="property-purpose-label"
                id="property-purpose"
                value={selectedPurpose}
                // className="city-filter-select"
                className={`${isBorderPurpose ? "bordered" : ""}`}
                onChange={(e) => handleClickPropertyPurpose(e)}
              >
                {/* <MenuItem value="" >Buy & Rent</MenuItem> */}
                <MenuItem value="sale">Buy</MenuItem>
                <MenuItem value="rent">Rent</MenuItem>
              </Select>
            </FormControl>
            <button
              className={`projects-type ${
                selectedProject === "IMARAT Residencies"
                  ? "selected-option"
                  : null
              }`}
              onClick={() => handleCityFilter("IMARAT Residencies")}
            >
              Project
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Ref.#</th>
                <th>Client Name</th>
                <th>Classification</th>
                <th>Rate/Sq.ft</th>
                <th>Status</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.projectName}</td>
                  <td>{row.floor}</td>
                  <td>{row.rate}</td>
                  <td>{row.size}</td>
                  <td>{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <div className="col-sm-6"></div>
            <div className="col-sm-6 ">
              <button
                className="generate-kfi-installment"
                onClick={handleGenerateinventory}
              >
                Select
              </button>
              <button className="cancel-inventory-installment">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InstallmentInventory;
