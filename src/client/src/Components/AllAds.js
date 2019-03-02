import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as actions from '../store/actions';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import Ad from './Ad';
import '../css/AllAds.css';
import Typography from "@material-ui/core/Typography/Typography";
import ManyAdsDisplay from "./ManyAdsDisplay";

class AllAds extends Component {
    state = {
        search: "",
        focus: false
    };

    componentDidMount() {
        this.props.fetchUser();

    }

    searchHandler = event => {
        this.setState({
            search: event.target.value
        })
    };

    render() {
        const ads = [
            {
                title: "Computer",
                description: "Super great computer",
                price: "$100",
                id: 1
            }, {
                title: "Chromebook",
                description: "Super amazing chromebook",
                price: "$100",
                id: 2
            }, {
                title: "Not a computer",
                description: "Uhh, I guess",
                price: "$100",
                id: 3
            },
        ];

        return (
            <React.Fragment>
                <Typography component="h4" variant="h4" gutterBottom className={"all-ads-header"}>
                    Search the glorious ads
                </Typography>
                <ManyAdsDisplay ads={ads} searchHandler={this.searchHandler} search={this.state.search}/>
            </React.Fragment>
        )
    }
}

export default connect(null, actions)(AllAds);
