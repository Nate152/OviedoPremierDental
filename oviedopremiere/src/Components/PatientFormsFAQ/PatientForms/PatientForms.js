import React from 'react';
import Button from "@material-ui/core/Button";
import PatientPacket from "../../../PatientForms/PatientPacket.pdf";
import PatientPacket1 from "../../../PatientForms/PatientPacket1.docx";

class PatientForms extends React.Component {
    render() {
        return (
            <div>
                <Button href={PatientPacket}>PDF Version</Button>
                <Button href={PatientPacket1}>MSWord Version</Button>
            </div>
        );
    }
}

export default PatientForms;