import React from 'react';
import './HomePage.css';

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
                </div>    
                <h2>A word from our Dentist</h2>
                <p> Oviedo Premier Dental is the premier dental health establishment in the Orlando / Oviedo Area. Our pledge to our patients is to provide the highest of patient-focused quality care while maintaining competitive fees for you.</p>
                <p> We realize that each individual is different, and we want every patient to be an active and informed participant in his or her treatment. By providing thorough explanations of all options, encouraging questions and addressing concerns, we empower our patients to take control of their dental health. Together, we will create a healthy smile for your future.</p>
                <p>Thank you for placing your trust in our office.<br/> -Dr. Michael R. Simpson</p>
            </div>
        );
    }
}

export default HomePage;