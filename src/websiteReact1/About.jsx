import React from 'react';
import aboutimg from '../images/aboutImg.svg'
import Commen from './Commen';

const About = () =>{
    return (
        <>
       <Commen name='Welcome to about page' imgSrc={aboutimg} visit='/contact' btnName='Contact Now'/>
        </>
    )
}

export default About;
