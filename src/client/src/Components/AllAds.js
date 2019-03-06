import React, {Component} from 'react';
import * as actions from '../store/actions';
import {connect} from 'react-redux';
import '../css/AllAds.css';
import Typography from "@material-ui/core/Typography/Typography";
import ManyAdsDisplay from "./ManyAdsDisplay";
import axios from "axios";
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class AllAds extends Component {
    state = {
        page: 1,
        ads: []
    };

    componentDidMount() {
        this.fetchAds()
    }

    fetchAds = () => {
        this.props.loadingHandler();
        axios.get(`/api/ads?page=${this.state.page}`).then(allAds => {
            this.props.loadingHandler();
            this.setState({
                ads: allAds.data
            });
        }).catch(error => console.log(error))

    };

    pageNavigate = direction => {
        direction === "up" ? this.setState({page: this.state.page + 1}) : this.setState({page: this.state.page - 1});
        setTimeout(() => {
            this.fetchAds()
        }, 100)
    };
    determinePages = () => {
        setTimeout(() => {
            const pages = Math.ceil(this.props.allAdsCount / 20);
            let pagesArray = [];
            for (let i = 1; i <= pages; i++) {
                pagesArray.push(i)
            }
            return (
                <FormControl>
                    <InputLabel htmlFor="page">Page</InputLabel>
                    <Select
                        value={this.state.age}
                        onChange={this.handleChange}
                        id={"page"}
                    >{pagesArray.map(page => (
                        <MenuItem value={page}>{page}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            )
        }, 100)

    };

    render() {
        let prevButton = null;
        if (this.state.page > 1) {
            prevButton = (
                <React.Fragment>
                    <div className="prev-cont">
                        <Button onClick={this.pageNavigate.bind(this, "down")}>Previous Page</Button>
                    </div>
                    <div className="first-cont">
                        <Button onClick={() => this.setState({pages: 1})}>First</Button>
                    </div>
                </React.Fragment>
            )
        }et
        et

        return (
            <React.Fragment>
                <div className={`all-ads-cont`}>
                    <Typography component="h4" variant="h4" gutterBottom className={"all-ads-header"}>
                        Search the glorious ads
                    </Typography>
                    <ManyAdsDisplay ads={this.state.ads}/>
                    {this.determinePages()}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        allAdsCount: state.allAdsCount
    }
};
export default connect(mapStateToProps, actions)(AllAds);
