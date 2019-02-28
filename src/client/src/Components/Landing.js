import React, {Component} from 'react';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Landing extends Component {
    componentDidMount(){
        this.props.fetchUser()
    }
    render() {
        return (
            <React.Fragment>
                <div className="landing-cont">
                    <Typography component="h4" variant="h4" gutterBottom className={"landing-header"}>
                        Welcome to Buy, Sell, Bye!
                    </Typography>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(null, actions)(Landing);
