import React from 'react';
import homeimg from '../images/homeImg.svg'
import Commen from './Commen';

const Home = () =>{
    return (
        <>
       <Commen name='Grow your business with' imgSrc={homeimg} visit='/service' btnName='Get started'/>
        </>
    )
}

export default Home;
