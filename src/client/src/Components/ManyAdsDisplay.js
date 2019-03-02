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

class ManyAdsDisplay extends Component {
    constructor(props){
        super(props)
    }
    searchHandler = event => {
        this.props.seachHandler(event)
    };

    render() {
        let adsToShow = this.props.ads.filter(ad => {
            if (ad.title.toLowerCase().includes(this.props.search)) {
                return ad
            }
        });
        return (
            <React.Fragment>
                <div className="ads-cont">
                    <Paper elevation={1} className={"search-cont"}>
                        <input type="text" id={"search"}
                               value={this.props.search}
                               onChange={this.props.searchHandler}/>
                        <IconButton aria-label="Search">
                            <SearchIcon/>
                        </IconButton>
                        <Divider/>
                    </Paper>
                </div>
                <div className="ads-cont">
                    {adsToShow.map(ad => <Ad title={ad.title} description={ad.description} price={ad.price} id={ad.id}
                                             key={ad.id}/>)}
                </div>
                <a href={"#top"}>
                    <Fab variant="extended" aria-label="Delete" className={`back-to-search-btn`}>
                        <NavigationIcon/>
                        Search
                    </Fab>
                </a>

            </React.Fragment>
        )
    }
}

export default connect(null, actions)(ManyAdsDisplay);
