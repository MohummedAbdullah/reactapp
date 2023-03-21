import React from "react";
import "./ClientJourney.scss";
const ClientJourney = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header"></section>
      <section className="content">
        <div className="row">
          <div className="col-md-3 clientinfo">
            <a href="compose.html" className="btn btn-block mb-3 user">
              <img
                src="./profile-avatar.png"
                alt="User Avatar"
                className="img-size-50 mr-3 img-circle"
              />
              {/*have to add profession from data */}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ClientJourney;
