import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../store/actions';
import { connect } from 'react-redux';

class Landing extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="landing-cont">
                    <h1>Welcome to Buy Sell, Bye!</h1>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(null, actions)(Landing);
