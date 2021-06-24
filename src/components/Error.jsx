import React from 'react';
import { NavLink } from 'react-router-dom';

const Error =()=>{
    return (
        <>
        <div>
        <h1> oops! page not found</h1>
        <p>sorry, page does not exist</p>
        <NavLink to='/'>go back</NavLink>
        </div>
        </>
    )
}

export default Error;
