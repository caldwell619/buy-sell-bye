import React, { Component } from 'react';
import SmLoggedIn from './SmLoggedIn';
import MdLoggedIn from './MdLoggedIn';

const LoggedInHeader = () => {
    return (
        <React.Fragment>
            <SmLoggedIn/>
            <MdLoggedIn/>
        </React.Fragment>
    )
};
export default LoggedInHeader;