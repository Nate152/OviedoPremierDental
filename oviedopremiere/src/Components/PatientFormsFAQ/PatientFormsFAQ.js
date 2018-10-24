import React from "react";
import PatientForms from "./PatientForms/PatientForms.js";
import "./PatientFormsFAQ.css";

class PatientFormsFAQ extends React.Component {
  render() {
    return (
      <div>
        <div className="faq">
          <div className="jumbotron1">
          <div className="opacity-layer">
            <h1 className="h1">Frequently Asked Questions</h1>
            <div className="list">
              <ul className="ul">
                <li className="question">
                  How many years has Dr. Simpson been practicing?
                </li>
                <p>- 22 years</p>
                <li className="question">
                  How long have you been at this location?
                </li>
                <p>
                  - Oveido Premier was opened in 2009 by its former owner. Prior
                  to that Dr. Simpson was at Lockwood Dental for 9+ years.
                </p>
                <li className="question">How long have you been in Oveido?</li>
                <p>
                  - In total, Dr. Simpson has been serving the Oveido community
                  for over 20 years.
                </p>
                <li className="question">How many....</li>
                <p>- Answer....</p>
                <li className="question">How many....</li>
                <p>- Answer....</p>
                <li className="question">How many....</li>
                <p>- Answer....</p>
              </ul>
            </div>
            </div>
          </div>
        </div>
        <PatientForms />
      </div>
    );
  }
}

export default PatientFormsFAQ;
