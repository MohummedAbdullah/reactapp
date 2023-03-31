import React from "react";
import "../KYC/Kyc.scss";
import "./Installmentcontent.scss";
const InstallmentTabContent = ({ handleGenerateKFI }) => {
  const data = [
    {
      id: 1,
      clientName: "Ahmed Khan",
      classification: "HOT",
      requirements: "2 Bed apartment In Golf Floras",
      status: "OPEN",
      nextFollowUp: "2023-03-20",
      action: "View Details",
    },
    {
      id: 2,
      clientName: "Ahmed Khan",
      classification: "WARM",
      requirements: "2 Bed apartment In Golf Floras",
      status: "CONNECT",
      nextFollowUp: "2023-03-20",
      action: "View Details",
    },
    {
      id: 3,
      clientName: "Ahmed Khan",
      classification: "HOT",
      requirements: "2 Bed apartment In Golf Floras",
      status: "OPEN",
      nextFollowUp: "2023-03-20",
      action: "View Details",
    },
    {
      id: 4,
      clientName: "Ahmed Khan",
      classification: "COLD",
      requirements: "2 Bed apartment In Golf Floras",
      status: "FOLLOW UP",
      nextFollowUp: "2023-03-20",
      action: "View Details",
    },
  ];
  return (
    <div className="haha">
      <div className="content-header">
        <div className="container-fluid">
          <div className="radio ">
            <button className="projects-type">Mall Of IMARAT</button>
            <button className="projects-type"> IMARAT Residencies</button>
            <button className="projects-type"> Bavylon </button>
            <button className="projects-type">Grand Bazaar</button>
            <button className="projects-type"> Golf Floras</button>
            <button className="projects-type"> Amazon Mall </button>
            <button className="projects-type"> Florence Galleria </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Client Name</th>
                <th>Classification</th>
                <th>Requirements</th>
                <th>Status</th>
                <th>Next Follow Up</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <td>{row.clientName}</td>
                  <td>
                    <p
                      className={
                        row.classification === "HOT"
                          ? "hotStyle"
                          : row.classification === "WARM"
                          ? "warmStyle"
                          : row.classification === "COLD"
                          ? "coldStyle"
                          : ""
                      }
                    >
                      {row.classification}
                    </p>
                  </td>
                  <td>{row.requirements}</td>
                  <td>
                    <p
                      className={
                        row.status === "OPEN"
                          ? "coldStyle"
                          : row.status === "CONNECT"
                          ? "connectStyle"
                          : row.status === "FOLLOW UP"
                          ? "followStyle"
                          : ""
                      }
                    >
                      {row.status}
                    </p>
                  </td>
                  <td>{row.nextFollowUp}</td>
                  <td>{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <div className="col-sm-6"></div>
            <div className="col-sm-6 ">
              <button
                className="generate-kfi-installment"
                onClick={handleGenerateKFI}
              >
                Generate KFIs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InstallmentTabContent;
