import React, {Component} from 'react';
import * as actions from '../store/actions';
import {connect} from 'react-redux';
import '../css/AllAds.css';
import Typography from "@material-ui/core/Typography/Typography";
import ManyAdsDisplay from "./ManyAdsDisplay";


class AllAds extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={`all-ads-cont`}>
                    <Typography component="h4" variant="h4" gutterBottom className={"all-ads-header"}>
                        Search the glorious ads
                    </Typography>
                    <ManyAdsDisplay ads={this.props.ads} searchHidden={this.props.searchHidden}/>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(null, actions)(AllAds);
