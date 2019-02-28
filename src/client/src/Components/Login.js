import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../store/actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import '../css/Login.css';
import Typography from "@material-ui/core/Typography/Typography";

class Login extends Component {
    state = {
        username: "",
        password: "",
        redirect: false,
        error: false,
        disabled: false

    };

    componentDidMount() {
        console.log("login mount");
        this.props.fetchUser()
    }

    login = () => {
        this.setState({
            disabled: true
        });
        // sets the backend session scope to log in the user
        axios.post("/api/login-user",
            `username=${this.state.username}&password=${this.state.password}`)
            .then(() => {
                this.setState({
                    redirect: true,
                    disabled: false
                })
            })
            .catch(() => {
                // eventual pop up saying nope
                this.setState({
                    error: true,
                    disabled: false
                })
            });
    };

    inputHandler = type => event => {
        this.setState({
            [type]: event.target.value
        })
    };

    render() {
        if (this.state.redirect) {
            return (<Redirect to={"/profile"}/>)
        }
        return (
            <React.Fragment>
                <Typography component="h3" variant="h3" gutterBottom className={"login-header"}>
                    Login
                </Typography>
            <div className="login-cont">
                <div>
                    <div className="form-fields">
                        <TextField
                            error={this.state.error}
                            id={`outlined-username`}
                            label="Username"
                            value={this.state.username}
                            onChange={this.inputHandler('username')}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            error={this.state.error}
                            id={`outlined-password`}
                            label="Password"
                            type="password"
                            value={this.state.password}
                            onChange={this.inputHandler('password')}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div className="btn-cont">
                        <Button variant="contained" color="primary"><div onClick={this.login}>Login</div></Button>
                        <Button variant="outlined">Forgot Password</Button>
                    </div>

                </div>
            </div>
            </React.Fragment>

        )
    }
}

// <Route path={"/ads/view"} render={() => <ListingsView/>}/>

const mapStateToProps = state => {
    return {
        user: state.user,
        menuShown: state.menuShown
    }
};
export default connect(mapStateToProps, actions)(Login);


