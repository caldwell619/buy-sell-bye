import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Ad from './Ad';
import '../css/AllAds.css';
import Typography from "@material-ui/core/Typography/Typography";

class Landing extends Component {
    state = {
        search: ""
    };
    componentDidMount(){
        this.props.fetchUser()
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
            },{
                title: "Chromebook",
                description: "Super amazing chromebook",
                price: "$100",
                id: 2
            },{
                title: "Not a computer",
                description: "Uhh, I guess",
                price: "$100",
                id: 3
            },
        ];
        let adsToShow = ads.filter(ad => {
            if(ad.title.toLowerCase().includes(this.state.search)){
                return ad
            }
        });
        return (
            <React.Fragment>
                <div className="landing-cont">
                    <Typography component="h4" variant="h4" gutterBottom className={"all-ads-header"}>
                        Search the glorious ads
                    </Typography>
                    <Paper elevation={1} className={"search-cont"}>
                        <input type="text" name={"search"} id={"search"} value={this.state.search} onChange={this.searchHandler}/>
                        <IconButton aria-label="Search">
                            <SearchIcon/>
                        </IconButton>
                        <Divider/>
                    </Paper>
                </div>
                <div className="ads-cont">
                    {adsToShow.map(ad => <Ad title={ad.title} description={ad.description} price={ad.price} id={ad.id} key={ad.id}/>)}
                </div>
            </React.Fragment>
        )
    }
}

export default connect(null, actions)(Landing);
