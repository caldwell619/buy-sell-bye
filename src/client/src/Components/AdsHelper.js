import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import AllAdds from "./AllAds";
import UserAds from "./UserAds";
import IndividualAd from "./IndividualAd";
import CreateAd from "./CreateAd";
import {connect} from "react-redux";
import * as actions from "../store/actions";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import axios from "axios";
import '../css/AllAds.css'

class AdsHelper extends Component {
    state = {
        isLoading: false
    };

    deleteAd = adId => {
        this.setState({isLoading: true});
        axios.delete(`/api/delete-ad?ad_id=${adId}`)
            .catch(error => console.log(error))
    };
    loadingHandler = () => {
        this.setState({
            isLoading : !this.state.isLoading
        })
    };

    render() {
        let name = "";
        let userId = "";
        if (this.props.user != null) {
            name = this.props.user.firstName;
            userId = this.props.user.id;
        }
        let style = "";
        let progressStyle = "";
        let searchHidden = "";
        if (this.state.isLoading) {
            style = "loading";
            progressStyle = "spinner-loading";
            searchHidden = "search-hidden"
        }


        return (
            <React.Fragment>
                <div className={`daddy-ads-cont ${style}`}>
                    <Switch>
                        <Route path={"/ads"} exact render={() => <AllAdds loadingHandler={this.loadingHandler}/>}/>
                        <Route path={"/ads/show/:user"} exact render={() =>
                            <UserAds name={name} userId={userId}
                                     searchHidden={searchHidden}
                                     deleteAd={this.deleteAd}
                                     loadingHandler={this.loadingHandler}
                            />}/>
                        <Route path={"/ads/view/:id"} render={(routeProps) =>
                            <IndividualAd
                                {...routeProps}
                                deleteAd={this.deleteAd}
                            />}/>
                        <Route path={"/ads/create"} exact render={() =>
                            <CreateAd name={name}
                                      userId={userId}
                                      loadingHandler={this.loadingHandler}
                            />}/>
                    </Switch>
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
export default connect(mapStateToProps, actions)(AdsHelper);
