import React, {Component} from 'react';
import * as actions from '../store/actions';
import {connect} from 'react-redux';
import '../css/AllAds.css';
import '../css/Login.css';
import Typography from "@material-ui/core/Typography/Typography";
import ManyAdsDisplay from "./ManyAdsDisplay";

class AllAds extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
                <Typography component="h5" variant="h5" gutterBottom className={"user-ads-header"}>
                    Check out your ads, {this.props.name}
                </Typography>
                <ManyAdsDisplay ads={this.props.ads}
                                userId={this.props.userId}
                                deleteAd={this.props.deleteAd}
                />
            </div>
            </React.Fragment>
        )
    }
}


export default AllAds;
