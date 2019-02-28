import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../css/AllAds.css';

class Landing extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Card className={"ind-ad-cont"}>
                <CardActionArea>
                    <CardMedia
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Ad thingy"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography component="p">
                            {this.props.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="secondary">
                        Share
                    </Button>
                    <Link to={`/ads/show/${this.props.id}`}><Button size="small" color="default">
                        Show more
                    </Button></Link>
                </CardActions>
            </Card>
        )
    }
}

export default Landing;

// on delete of an ad, show a snackbar
