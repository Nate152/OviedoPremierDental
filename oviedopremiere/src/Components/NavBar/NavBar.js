import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return(
          <div>
              <AppBar position='static'>
                <div className='navbar'>
                  <Button>Home</Button>
                  <Button>About</Button>
                  <Button>Dental Services</Button>
                  <Button>Our Office</Button>
                  <Button>Patient Packet</Button>
                  <Button>Reviews</Button>
                </div>
              </AppBar>
          </div>  
        );
    }
}

export default NavBar;