import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <Button><Link to='/'>Home</Link></Button>
                <Button><Link to='/About'>About</Link></Button>
                <Button><Link to='/DentalServices'>Dental Services</Link></Button>
                <Button><Link to='/OurOffice'>Our Office</Link></Button>
                <Button><Link to='/PatientPacket'>Patient Packet</Link></Button>
                <Button><Link to='/Reviews'>Reviews</Link></Button>
            </div>
        );
    }
}

export default Footer;