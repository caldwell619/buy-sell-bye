import React, { Component } from 'react';
import SmLoggedOut from './SmLoggedOut';
import MdLoggedOut from './MdLoggedOut';

const LoggedOutHeader = () => {
    return (
        <React.Fragment>
            <SmLoggedOut/>
            <MdLoggedOut/>
        </React.Fragment>
    )
};
export default LoggedOutHeader;