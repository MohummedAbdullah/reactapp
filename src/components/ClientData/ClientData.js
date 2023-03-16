import React from "react";

const ClientData = () => {
  const data = [
    {
      id: 1,
      clientName: "Client A",
      classification: "Class A",
      requirements: "Requirement A",
      status: "Pending",
      nextFollowUp: "2023-03-20",
      action: "View",
    },
    {
      id: 2,
      clientName: "Client B",
      classification: "Class B",
      requirements: "Requirement B",
      status: "In Progress",
      nextFollowUp: "2023-03-22",
      action: "Edit",
    },
    {
      id: 3,
      clientName: "Client C",
      classification: "Class C",
      requirements: "Requirement C",
      status: "Completed",
      nextFollowUp: "2023-03-25",
      action: "Delete",
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
              <li className="breadcrumb-item"><a href="#">Register New Client</a></li>
              {/* <li className="breadcrumb-item active">Dashboard v1</li> */}
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
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
            <td>{row.classification}</td>
            <td>{row.requirements}</td>
            <td>{row.status}</td>
            <td>{row.nextFollowUp}</td>
            <td>{row.action}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default ClientData;