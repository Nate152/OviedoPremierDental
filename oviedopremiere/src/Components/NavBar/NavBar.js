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
                  <Button color='inherit'>Home</Button>
                  <Button color='inherit'>About</Button>
                  <Button color='inherit'>Dental Services</Button>
                  <Button color='inherit'>Our Office</Button>
                  <Button color='inherit'>Patient Packet</Button>
                  <Button color='inherit'>Reviews</Button>
                </div>
              </AppBar>
          </div>  
        );
    }
}

export default NavBar;