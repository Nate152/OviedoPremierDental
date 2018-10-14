import React from 'react';
import Button from '@material-ui/core/Button';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <Button>Home</Button>
                <Button>About</Button>
                <Button>Dental Services</Button>
                <Button>Our Office</Button>
                <Button>Patient Packet</Button>
                <Button>Reviews</Button>
            </div>
        );
    }
}

export default Footer;