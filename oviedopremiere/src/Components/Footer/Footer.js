import React from 'react';
import Button from '@material-ui/core/Button';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <Button href='/'>Home</Button>
                <Button href='/HoursLocation'>Hours & Location</Button>
                <Button href='/DentalServices'>Dental Services</Button>
                <Button href='/OurOffice'>Our Office</Button>
                <Button href='/PatientPacket'>Patient Packet</Button>
                <Button href='/Reviews'>Reviews</Button>
            </div>
        );
    }
}

export default Footer;