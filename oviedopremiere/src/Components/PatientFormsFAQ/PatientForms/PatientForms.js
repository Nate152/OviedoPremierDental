import React from "react";
import PatientPacket from "../../../PatientForms/PatientPacket.pdf";
import PatientPacket1 from "../../../PatientForms/PatientPacket1.docx";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        background: "#00bcd4",
        borderRadius: 3,
        border: 5,
        color: "black",
        height: 48,
        width: 150,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
      }
    }
  }
});

class PatientForms extends React.Component {
  render() {
    return (
      <div>
        <h1>New Patient Packet</h1>
        <MuiThemeProvider theme={theme}>
          <Button href={PatientPacket}>PDF</Button>
          <Button href={PatientPacket1}>Microsoft Word</Button>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default PatientForms;
