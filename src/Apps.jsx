import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './websiteReact1/Home';
import About from './websiteReact1/About';
import Service from './websiteReact1/Service';
import Contact from './websiteReact1/Contact';
import Navbar from './websiteReact1/Navbar';
import Footer from './websiteReact1/Footer';
import {Switch, Route , Redirect} from 'react-router-dom';
 
const Apps =()=>{
    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/service' component={Service} />
            <Route exact path='/contact' component={Contact} />
            <Redirect to='/' component={Home} />
        </Switch>
        <Footer/>
        </>
    )
}

export default Apps

