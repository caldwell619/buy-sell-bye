import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import ArrowBack from '@material-ui/icons/ArrowBack'
import '../css/AllAds.css';

class IndividualAd extends Component {
    constructor(props){
        super(props)
    }


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
        let shownAdArray = ads.filter(ad => {
            return ad.id === Number(this.props.match.params.id)
        });
        let shownAd = shownAdArray[0];

        return (
            <Card className={"big-ad-cont"}>
                <CardActionArea>
                    <CardContent>
                        <div className="big-ad-header">
                            <Typography component="h3" variant="h3" gutterBottom className={"big-ad-header"}>
                                {shownAd.title}
                            </Typography>
                            <Button size="small" color="secondary">
                                Share
                            </Button>
                        </div>
                        <Typography component="h4" variant="h4" gutterBottom>
                            {shownAd.price}
                        </Typography>
                        <div className="ad-description">
                            <Typography component="p">
                                {shownAd.description}
                            </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions className={"action-cont"}>

                    <Button variant="outlined">
                        Contact Seller
                    </Button>
                    <Button variant="contained" color="primary" className={"save-ad-butt"}>
                        Save
                    </Button>
                </CardActions>
                <Fab color="primary" aria-label="Add" className={"back-button"}>
                    <ArrowBack/>
                </Fab>
            </Card>
        )
    }
}

export default IndividualAd;

// on delete of an ad, show a snackbar
