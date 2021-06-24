import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return(
        <>
        <div className='menu_style'>
        <NavLink exact activeClassName='active_class' to='/'>About us</NavLink>
        <br/>
        <NavLink exact activeClassName='active_class' to='/contact'>Contact us</NavLink>
        <br/>
        <NavLink exact activeClassName='active_class' to='/search'> search</NavLink>
        <br/>
        <NavLink activeClassName='active_class' to='/user/mohammed/afaf'>User</NavLink>
        <br/>
        <NavLink exact activeClassName='active_class' to='/service'>Service</NavLink>
        </div>
        </>
    )
}

export default Menu;