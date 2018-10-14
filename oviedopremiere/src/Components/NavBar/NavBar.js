import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import './NavBar.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff',
    },
    secondary: {
      main: '#B79A3F',
    },
  },
});

class NavBar extends React.Component {
    render() {
        return(
          <div>
              <MuiThemeProvider theme={theme}>
              <AppBar color='primary' position='static'>
                <div className='navbar'>
                  <Button href='/'color='inherit'>Home</Button>
                  <Button href='/About' color='inherit'>About</Button>
                  <Button href='/DentalServices' color='inherit'>Dental Services</Button>
                  <Button href='/OurOffice' color='inherit'>Our Office</Button>
                  <Button href='/PatientPacket' color='inherit'>Patient Packet</Button>
                  <Button href='/Reviews' color='inherit'>Reviews</Button>
                </div>
              </AppBar>
              </MuiThemeProvider>
          </div>  
        );
    }
}

export default NavBar;