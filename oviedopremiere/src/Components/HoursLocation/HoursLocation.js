import React from "react";
import HoursTable from "./HoursTable/Table.js";
import GoogleMap from "./GoogleMap/Map.js";
import "./HoursLocation.css";

class HoursLocation extends React.Component {
  render() {
    return (
      <div>
        <div className="box">
          <div className="hours">
            <h1>Hours of Operation</h1>
            <div className="table">
              <HoursTable />
            </div>
            <p>*Closed major holidays</p>
          </div>
          <div className="location">
            <h1>Location</h1>
            <p>
              We are located at 1445 E. Mitchell Hammock Rd., Oviedo, FL 32765.
              In order to get to the office you must turn onto Eastbridge Dr.
              and then take the second right as though you are going to the
              StarChild Academy. You will see our sign straight ahead and take
              the second right. We look foward to seeing you soon.
            </p>
            <GoogleMap />
          </div>
        </div>
        <h3>
          Call today to schedule your appointment <br />
          (407) 977-6464
        </h3>
      </div>
    );
  }
}

export default HoursLocation;
