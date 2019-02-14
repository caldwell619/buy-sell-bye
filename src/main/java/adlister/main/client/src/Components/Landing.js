import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Landning extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="hero-image">
                    <div className="hero-text">
                        <h1>Buy..Sell...Bye</h1>
                        <p id="bio">Consider this your last stop.
                            Stop wasting your time at the store when
                            when we have everything you need.</p>
                    </div>
                </div>

                <input id="toggle" type="checkbox"/>
                    <label className="toggle-container" htmlFor="toggle">
                        <span className="button button-toggle"></span>
                    </label>

                    <div className="device">
                        <div className="container">
                            <button id="burger" className="open-main-nav">
                                <span className="burger"></span>
                                <span className="burger-text">Menu</span>
                            </button>
                            <nav className="main-nav" id="main-nav">
                                <ul>
                                    <li><Link to="/profile">Profile</Link></li>
                                    <li><Link to="/postings">Postings </Link></li>
                                    <li><Link to="/contact">Contact </Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default Landning;
