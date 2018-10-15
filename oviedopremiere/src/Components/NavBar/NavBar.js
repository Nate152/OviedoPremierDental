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
      contrastText: '#000000',
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
                  <Button href='/'>Home</Button>
                  <Button href='/OurOffice'>About Our Office</Button>
                  <Button href='/HoursLocation'>Hours & Location</Button>
                  <Button href='/DentalServices'>Dental Services</Button>
                  <Button href='/PatientPacket'>Patient Packet</Button>
                  <Button href='/Reviews'>Reviews</Button>
                </div>
              </AppBar>
              </MuiThemeProvider>
          </div>  
        );
    }
}

export default NavBar;