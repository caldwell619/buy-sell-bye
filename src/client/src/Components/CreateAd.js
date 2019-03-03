import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import { connect } from 'react-redux';
import axios from 'axios';
import '../css/CreateAd.css';
import Button from "@material-ui/core/Button/Button";

class CreateAd extends Component {
    state = {
        title: "",
        description: "",
        categories: "",
        price: "",
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
        let username = "";
        if (this.props.user !== null){
            username = this.props.user.username
        }
        if (this.state.redirect) {
            return <Redirect to={`/ads/${username}`}/>
        }
        if (this.props.user === false){
            return <Redirect to={"/login"}/>
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
                                id="standard-with-placeholder"
                                label="Title"
                                placeholder="Title of your sweet ad"
                                margin="normal"
                                fullWidth={true}
                                value={this.state.title}
                                onChange={this.inputHandler('title')}
                            />
                        </div>
                        <div className="price-cont">
                            <div className="price-input-cont">
                                <Input
                                    placeholder={"Price"}
                                    type={"number"}
                                    id="adornment-amount"
                                    value={this.state.price}
                                    onChange={this.inputHandler('price')}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    fullWidth={true}
                                />
                            </div>
                        </div>
                        <div className="description-cont">
                            <TextField
                                id="standard-textarea"
                                label="Description"
                                placeholder="Description of your sweet ad"
                                multiline
                                margin="normal"
                                fullWidth={true}
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