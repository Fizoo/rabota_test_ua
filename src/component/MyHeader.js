import React from 'react';
import logo from '../logo/Logo-Regular.png'
const MyHeader = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt=""/>
            </div>
        </div>
    );
};

export default MyHeader;
