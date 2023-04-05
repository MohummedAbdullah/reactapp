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
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [isBorderPrice, setIsBorderPrice] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isBorderProject, setIsBorderProject] = useState(false);
  const handleClickPropertyPurpose = (event) => {
    setIsBorderPrice(true);
    setSelectedPrice(event.target.value);
  };
  const handleClickInstProject = (event) => {
    setIsBorderProject(true);
    setSelectedProject(event.target.value);
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
            <FormControl fullWidth>
              <InputLabel id="property-purpose-label">Price</InputLabel>
              <Select
                labelId="property-purpose-label"
                id="property-purpose"
                value={selectedPrice}
                // className="city-filter-select"
                className={`${isBorderPrice ? "selected-option" : ""}`}
                onChange={(e) => handleClickPropertyPurpose(e)}
              >
                {/* <MenuItem value="" >Buy & Rent</MenuItem> */}
                <MenuItem value="10">Pkr 20 lac</MenuItem>
                <MenuItem value="20">Pkr 50 lac</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="property-purpose-label">Project</InputLabel>
              <Select
                labelId="property-purpose-label"
                id="property-purpose"
                value={selectedProject}
                // className="city-filter-select"
                className={`${isBorderProject ? "selected-option" : ""}`}
                onChange={(e) => handleClickInstProject(e)}
              >
                {/* <MenuItem value="" >Buy & Rent</MenuItem> */}
                <MenuItem value="10">Mall Of Imarat</MenuItem>
                <MenuItem value="20">Bavylon</MenuItem>
              </Select>
            </FormControl>
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
