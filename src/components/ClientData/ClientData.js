import React from "react";
import "./ClientData.scss"
import { Link } from 'react-router-dom';

const ClientData = () => {
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
    <div className="content-wrapper">
            <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">Clients</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
            <Link to="/registerClient" className="nav-link">
  <li className="breadcrumb-item"><a className="registerclient" >+ Register New Client</a></li>
  </Link>
              {/* <li className="breadcrumb-item active">Dashboard v1</li> */}
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
  
    <table >
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
            <td >
                <p className={row.classification === "HOT" ? "hotStyle" :row.classification === "WARM" ? "warmStyle" :row.classification === "COLD" ? "coldStyle": ""}>
                    {row.classification}</p></td>
            <td>{row.requirements}</td>
            <td>
            <p className={row.status === "OPEN" ? "coldStyle" :row.status === "CONNECT" ? "connectStyle" :row.status === "FOLLOW UP" ? "followStyle": ""}>
                    {row.status}</p></td>
            <td>{row.nextFollowUp}</td>
            <td>{row.action}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>{/* /.container-fluid */}
    </div>
    </div>
  );
};

export default ClientData;