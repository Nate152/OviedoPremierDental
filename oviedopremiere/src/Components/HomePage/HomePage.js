import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './HomePage.css';
import Invisalign from '../../Images/Invisalign.png';
import Lumineers from '../../Images/Lumineers.png';
import ProAct from '../../Images/ProAct.png';
import SomnoMed from '../../Images/SomnoMed.png';
import TAP from '../../Images/TAP.png';
import URAC from '../../Images/URAC.png';


class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='jumbotron'></div>
                    <div className='title'>
                        <h1>Oviedo Premiere Dental</h1>
                        <h2>1445 E. Mitchell Hammock Rd.<br/>Oviedo, FL 32765</h2>
                        <h2>(407) 977-6464</h2>
                    </div>
                    <div>
                        <h2 className='mission'>Oviedo Dentists Dedicated to Quality Service</h2>
                    </div>
                </div>
                <div className='middle'>
                    <div className='message'>
                        <Paper elevation={3}>    
                            <Typography variant='h4' component='h2' gutterBottom align='center'>-A word from our Dentist-</Typography>
                            <Typography variant='body1' component='p' gutterBottom align='center'>Oviedo Premier Dental is the premier dental health establishment in the Orlando / Oviedo Area. Our pledge to our patients is to provide the highest of patient-focused quality care while maintaining competitive fees for you.</Typography>
                            <Typography variant='body1' component='p' gutterBottom align='center'>We realize that each individual is different, and we want every patient to be an active and informed participant in his or her treatment. By providing thorough explanations of all options, encouraging questions and addressing concerns, we empower our patients to take control of their dental health. Together, we will create a healthy smile for your future.</Typography>
                            <Typography variant='h5' component='p' gutterBottom align='center'>Thank you for placing your trust in our office.</Typography>
                            <Typography variant='overline' component='p' gutterBottom align='center'>-Dr. Michael R Simpson</Typography>
                        </Paper>
                    </div>
                    <div className='eyes'></div>
                </div>
                <div className='certifications'>
                    <Paper elevation={1}><img src={Invisalign} alt='Invisalign'/></Paper>
                    <Paper elevation={1}><img src={Lumineers} alt='Lumineers'/></Paper>
                    <Paper elevation={1}><img src={ProAct} alt='ProAct'/></Paper>
                    <Paper elevation={1}><img src={SomnoMed} alt='SomnoMed'/></Paper>
                    <Paper elevation={1}><img src={TAP} alt='Thorton Adjustable Positioner'/></Paper>
                    <Paper elevation={1}><img src={URAC} alt='URAC'/></Paper>
                </div>
            </div>
        );
    }
}

export default HomePage;