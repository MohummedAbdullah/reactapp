import React from "react";
import { useState } from "react";
import "./ClientDetail.scss";
import { Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";
import "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const ClientDetail = () => {
  const [value, setValue] = useState(0);
  const [type, setType] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleItemTypeSelected = (event) => {
    setType(event.target.value);
  };
  return (
    <div className="content-wrapper" id="ClientDetail">
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
              Ahmed Khan
              <p className="profession">Businessman</p>{" "}
              {/*have to add profession from data */}
            </a>

            <div className="card">
              {/* <div className="card-header">
                <h3 className="card-title">Folders</h3> */}
              {/* <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-minus" />
                </button>
              </div> */}
              {/* </div> */}
              <div className="card-body p-0">
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item active">
                    <a href="#" className="nav-link">
                      {/* <i className="fas fa-inbox" /> */}
                      Phone #
                      {/* <span className="badge bg-primary float-right">12</span> */}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      {/* <i className="far fa-envelope" /> */}
                      Phone # 2
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      {/* <i className="far fa-file-alt" /> */}
                      Phone # 3
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      {/* <i className="fas fa-filter" /> */}
                      Email
                      {/* <span className="badge bg-warning float-right">65</span> */}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      {/* <i className="far fa-trash-alt" />  */}
                      Profession
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      {/* <i className="far fa-trash-alt" /> */}
                      City
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      {/* <i className="far fa-trash-alt" /> */}
                      Priority
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="ViewKyc">
              {/* //need to update this */}
              <div>
                <Link to="/ClientJourney">
                  <h4 className="text-dark profession">View And Update KYC</h4>
                </Link>
              </div>
            </div>

            {/* <div className="Kyc row">
              <div>
                <Link to="/ClientDetail">
                  <h4 className="mt-20 text-dark profession">
                    View And Update KYC
                  </h4>
                </Link>
              </div>
            </div> */}
          </div>
          <div className="col-md-9">
            <div className="card card-primary card-outline">
              <div className="card-header">
                <h3 className="card-title">
                  Interested In Golf Floras Apartment
                </h3>
                {/*  need to fetch from data */}
                <div className="card-tools">
                  <div className="input-group input-group-sm client-journey">
                    <Link to="/ClientJourney">
                      <a className="client-journey"> Client Journey</a>
                      <h4 className="text-dark profession"></h4>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  TabIndicatorProps={{ style: { backgroundColor: "#3fb56c" } }}
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="action tabs example"
                >
                  <Tab label="History" />
                  <Tab label="Tasks" />
                  <Tab label="Notes" />
                  <Tab label="Emails" />
                </Tabs>
                <div className="FilterClient ">
                  <p className="filterby">Filter by</p>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="Type-label">Select Type</InputLabel>
                      <Select
                        labelId="Type-label"
                        id="property-city"
                        value={type}
                        onChange={(event) => handleItemTypeSelected(event)}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>thirty</MenuItem>
                        <MenuItem value={40}>forty</MenuItem>
                        <MenuItem value={50}>fifty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  {/* <MenuItem
                key={city.id}
                value={city.id}
                // className={`${selectedCity === city.id ? "selected-item" : ""}`}
                onClick={() => handleItemCitySelected(city.id)}
              >
                {city.name}
              </MenuItem> */}
                  {/* ))} */}

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker label="Select Date" />
                    </DemoContainer>
                  </LocalizationProvider>
                  {/* <table className="table table-hover table-striped">
                    <tbody>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check1" />
                            <label htmlFor="check1" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment" />
                        <td className="mailbox-date">5 mins ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check2" />
                            <label htmlFor="check2" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star-o text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment">
                          <i className="fas fa-paperclip" />
                        </td>
                        <td className="mailbox-date">28 mins ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check3" />
                            <label htmlFor="check3" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star-o text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment">
                          <i className="fas fa-paperclip" />
                        </td>
                        <td className="mailbox-date">11 hours ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check4" />
                            <label htmlFor="check4" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment" />
                        <td className="mailbox-date">15 hours ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check5" />
                            <label htmlFor="check5" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment">
                          <i className="fas fa-paperclip" />
                        </td>
                        <td className="mailbox-date">Yesterday</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check6" />
                            <label htmlFor="check6" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star-o text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment">
                          <i className="fas fa-paperclip" />
                        </td>
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check7" />
                            <label htmlFor="check7" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star-o text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment">
                          <i className="fas fa-paperclip" />
                        </td>
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check8" />
                            <label htmlFor="check8" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment" />
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check9" />
                            <label htmlFor="check9" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment" />
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check10" />
                            <label htmlFor="check10" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star-o text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment" />
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check11" />
                            <label htmlFor="check11" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star-o text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment">
                          <i className="fas fa-paperclip" />
                        </td>
                        <td className="mailbox-date">4 days ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check12" />
                            <label htmlFor="check12" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment" />
                        <td className="mailbox-date">12 days ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check13" />
                            <label htmlFor="check13" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star-o text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment">
                          <i className="fas fa-paperclip" />
                        </td>
                        <td className="mailbox-date">12 days ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check14" />
                            <label htmlFor="check14" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment">
                          <i className="fas fa-paperclip" />
                        </td>
                        <td className="mailbox-date">14 days ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icheck-primary">
                            <input type="checkbox" defaultValue id="check15" />
                            <label htmlFor="check15" />
                          </div>
                        </td>
                        <td className="mailbox-star">
                          <a href="#">
                            <i className="fas fa-star text-warning" />
                          </a>
                        </td>
                        <td className="mailbox-name">
                          <a href="read-mail.html">Alexander Pierce</a>
                        </td>
                        <td className="mailbox-subject">
                          <b>AdminLTE 3.0 Issue</b> - Trying to find a solution
                          to this problem...
                        </td>
                        <td className="mailbox-attachment">
                          <i className="fas fa-paperclip" />
                        </td>
                        <td className="mailbox-date">15 days ago</td>
                      </tr>
                    </tbody>
                  </table> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ClientDetail;
