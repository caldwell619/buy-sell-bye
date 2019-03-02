import React, {Component} from 'react';
import * as actions from '../store/actions';
import {connect} from 'react-redux';
import axios from 'axios';
import '../css/AllAds.css';
import '../css/Login.css';
import Typography from "@material-ui/core/Typography/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import ManyAdsDisplay from "./ManyAdsDisplay";

class AllAds extends Component {
    state = {
        search: "",
        isLoading: false,
        userAds: []
    };

    componentDidMount() {
        this.props.fetchUser();
        this.setState({isLoading: true});
        setTimeout(()=> {
            axios.get(`/api/user-ads?id=${this.props.userId}`)
                .then(res => {
                    this.setState({
                        userAds: res.data,
                        isLoading: false
                    })
                })
                .catch(error => console.log(error));
        }, 0)


    }

    searchHandler = event => {
        this.setState({
            search: event.target.value
        })
    };

    render() {
        let style = "";
        let progressStyle = "";
        if (this.state.isLoading){
            style = "big-login-cont";
            progressStyle = "loading";
        }
        return (
            <React.Fragment>
            <div className={`${style}`}>
                <Typography component="h5" variant="h5" gutterBottom className={"user-ads-header"}>
                    Check out your ads, {this.props.name}
                </Typography>
                <ManyAdsDisplay ads={this.state.userAds} searchHandler={this.searchHandler} search={this.state.search} userAds={true}/>
            </div>
                <CircularProgress className={`progress ${progressStyle}`}/>
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
