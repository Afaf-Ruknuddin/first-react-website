import React from 'react';
import { NavLink } from 'react-router-dom';

const Commen = (props) =>{
    return (
        <>
        <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row'>
                        <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                            <h1> {props.name} <strong className='text-primary'>Afaf ruknuddin</strong></h1>
                            <h2 className='my-3'>
                                we are the team of talented developer making development
                            </h2>
                            <div className='mt-3'>
                                <NavLink to={props.visit} className='btn-get-started'> {props.btnName}</NavLink>
                            </div>
                        </div>
                        <div className='col-6 order-1 order-lg-2 header-img'>
                            <img src={props.imgSrc} className='img-fluid animated' alt='homeImg'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default Commen;
