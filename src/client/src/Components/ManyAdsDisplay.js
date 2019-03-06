import React, {Component} from 'react';
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
    state = {
        search: ""
    };

    searchHandler = event => {
        this.setState({
            search: event.target.value
        })
    };

    render() {
        let adsToShow = this.props.ads.filter(ad => {
           return ad.title.toLowerCase().includes(this.state.search)
        });
        let imgUrls = [];
        let emptyDisplay = null;
        for (let i = 1; i <= 5; i++){
            imgUrls.push(`/images/empty${i}.png`)
        }
        let randomImg = imgUrls[Math.floor(Math.random() * 5)];
        if (adsToShow.length === 0){
            emptyDisplay = (
                <div className="empty-cont">
                    <img className={"empty-img"} src={randomImg} alt={"empty image"}/>
                </div>
            )
        }
        return (
            <React.Fragment>
                <div className="search-ads-cont">
                    <Paper elevation={1} className={"search-cont"}>
                        <input type="text" id={"search"}
                               value={this.state.search}
                               onChange={this.searchHandler}/>
                        <IconButton aria-label="Search">
                            <SearchIcon/>
                        </IconButton>
                        <Divider/>
                    </Paper>
                </div>
                <div className="ads-cont">
                    {emptyDisplay}
                    {adsToShow.map(ad => (<Ad title={ad.title}
                                              description={ad.description}
                                              price={ad.price}
                                              id={ad.id}
                                              key={ad.id}
                                              userId={this.props.userId}
                                              deleteAd={this.props.deleteAd}
                    />))}
                </div>
            </React.Fragment>
        )
    }
}

export default connect(null, actions)(ManyAdsDisplay);
