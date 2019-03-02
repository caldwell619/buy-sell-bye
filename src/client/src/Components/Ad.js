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
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import IconButton from "@material-ui/core/IconButton/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

class Landing extends Component {
    render() {
        let deleteBtn = null;
        if (this.props.userAds){
            deleteBtn = (
                <Tooltip title="Delete">
                    <IconButton aria-label="Delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            )
        }
        return (
            <Card className={"ind-ad-cont"}>
                <CardActionArea>
                    <CardMedia
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Ad thingy"
                    />
                    <CardContent>
                        <div className="topper">
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.title}
                            </Typography>
                            {deleteBtn}
                        </div>

                        <Typography component="p">
                            {`$${this.props.price}`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="secondary">
                        Share
                    </Button>
                    <Link to={`/ads/view/${this.props.id}`}><Button size="small" color="default">
                        Show more
                    </Button></Link>
                </CardActions>
            </Card>
        )
    }
}

export default Landing;

// on delete of an ad, show a snackbar
