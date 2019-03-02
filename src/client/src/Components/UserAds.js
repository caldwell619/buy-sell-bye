import React, {Component} from 'react';
import * as actions from '../store/actions';
import {connect} from 'react-redux';
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
        let name = "";
        if (this.props.user != null){
            name = this.props.user.firstName
        }
        return (
            <React.Fragment>
                <Typography component="h5" variant="h5" gutterBottom className={"user-ads-header"}>
                    Check out your ads, {name}
                </Typography>
                <ManyAdsDisplay ads={ads} searchHandler={this.searchHandler} search={this.state.search}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};
export default connect(mapStateToProps, actions)(AllAds);
