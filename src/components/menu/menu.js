/* eslint-disable no-unused-vars,quotes */
import React from 'react';
import './menu.css';
import {Link} from 'react-router-dom';

const Menu = () => (
    <div className='menu-container'>
        <div className='logo'> WebbyLab Test</div>
        <ul className='menu-list'>
            <li><Link className='router-link' to={`/WL-Deploy/`}>All films</Link></li>
            <li><Link className='router-link' to={`/WL-Deploy/add`}>Add film</Link></li>
            <li><Link className='router-link' to={`/WL-Deploy/pages/lorem`}>Lorem</Link></li>
            <li><Link className='router-link' to={`/WL-Deploy/pages/ipsum`}>Ipsum</Link></li>
            <li><Link className='router-link' to={`/WL-Deploy/pages/dolor`}>Dolor</Link></li>
        </ul>
    </div>
);

export default Menu;
