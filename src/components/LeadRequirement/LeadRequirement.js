import React from "react";
import { Row, Col } from "reactstrap";
import "./LeadRequirement.scss";
const LeadRequirement = () => {
  return (
    <div>
      <Row>
        <Col sm="12" md="6" lg="6">
          <input
            placeholder="Select City"
            name="clientsource"
            type="text"
            // onChange: handleChange,
            // value: phone,
            className="client-input"
          />
        </Col>

        <Col sm="12" md="6" lg="6">
          <input
            placeholder="Select Project"
            name="clientsource"
            type="text"
            // onChange: handleChange,
            // value: phone,
            className="client-input"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="6" lg="6">
          <input
            placeholder="Select Unit Type"
            name="clientsource"
            type="text"
            // onChange: handleChange,
            // value: phone,
            className="client-input"
          />
        </Col>

        <Col sm="12" md="6" lg="6">
          <input
            placeholder="Investment Range"
            name="clientsource"
            type="text"
            // onChange: handleChange,
            // value: phone,
            className="client-input"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="12" lg="12">
          <input
            placeholder="Description"
            name="clientsource"
            type="text"
            // onChange: handleChange,
            // value: phone,
            className="client-description"
          />
        </Col>
      </Row>
    </div>
  );
};
export default LeadRequirement;
