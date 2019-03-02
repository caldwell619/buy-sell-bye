import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux';
import axios from 'axios';
import '../css/CreateAd.css';
import Button from "@material-ui/core/Button/Button";

class CreateAd extends Component {
    state = {
        title: "",
        description: "",
        categories: "",
        disabledButton: false,
        redirect: false
    };

    inputHandler = type => event => {
        this.setState({
            [type]: event.target.value
        })
    };
    createAd = () => {
        axios.post("/api/create-ad", {
            userId: this.props.user.id,
            title: this.state.title,
            description: this.state.description,
            price: this.state.price
        }).then(() => {this.setState({redirect: true})})
            .catch(error => console.log(error))
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to={"/ads"}/>
        }
        return (
            <div className="create-ad-cont">
                <Typography component="h4" variant="h4" gutterBottom className={"create-ad-header"}>
                    Create a sweet ad!
                </Typography>
                <div className="input-field-cont">
                    <div className="another-input-cont">
                        <div className="title-cont">
                            <TextField
                                id="outlined-with-placeholder"
                                label="Title"
                                placeholder="Title of your sweet ad"
                                margin="normal"
                                variant="outlined"
                                value={this.state.title}
                                onChange={this.inputHandler('title')}
                            />
                        </div>
                        <div className="price-cont">
                            <TextField
                                id="outlined-with-placeholder"
                                label="Price"
                                placeholder="Price of your sweet ad"
                                margin="normal"
                                variant="outlined"
                                value={this.state.price}
                                onChange={this.inputHandler('price')}
                            />
                        </div>
                        <div className="description-cont">
                            <TextField
                                id="outlined-textarea"
                                label="Description"
                                placeholder="Tell the world why your product is worth buying"
                                multiline
                                margin="normal"
                                variant="outlined"
                                value={this.state.description}
                                onChange={this.inputHandler('description')}
                            />
                        </div>
                        <div className="create-btn-cont">
                            <Button variant="contained" color="primary"><div onClick={this.createAd}>Sell Stuff!</div></Button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};
export default connect(mapStateToProps)(CreateAd);
