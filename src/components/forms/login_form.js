import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import { AsyncStorage } from 'AsyncStorage';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            redirectNext: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.responseFacebook = this.responseFacebook.bind(this)
    }
    responseGoogle = (response) => {
        console.log(response);
        console.log(response.googleId)
        if (response.googleId != undefined) {
            this.setState({ redirectNext: true });
        }
        else {

            alert(response.error)
        }

    }
    responseFacebook(response) {
        console.log(response)
        console.log(response.id)

        if (response.id != undefined) {
            this.setState({ redirectNext: true });
        }
        else {
            alert("Login Failed! Please retry.")
        }

    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log(this.state.email)
        console.log(this.state.password)
        axios.get("https://tssl-backend.herokuapp.com/members",

            { withCredentials: false }
        ).then(response => {
            console.log("response", response);
            var arr = response.data;
            console.log("response", arr);

            var searchedData = arr.filter(item => item.email === this.state.email && item.password === this.state.password)
            console.log("response", searchedData);

            if (searchedData.length != 0) {
                try {
                    AsyncStorage.setItem('currentUserId', searchedData[0].id);
                  } catch (error) {
                    // Error saving data
                  }
                this.setState({
                    redirectNext: true
                })
            }
            else {
                alert("Wrong Username or password!")
            }
            // arr.forEach(element => {
            //     console.log(element)
            // });
        })
        .catch(error => {
                console.log(error)
            });
        
            event.preventDefault();

    }

    render() {
        return (
            <div className="login_form_wrapper">
                <div className="form_header">
                    <h1>Have an Account...</h1>
                </div>
                <div className="form_entry_container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form_entry">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form_entry">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        {this.state.redirectNext == true ? <Redirect to="/member" /> : null}
                        <div className="submit_btn">
                            <button type="submit">Login</button>
                        </div>
                        {/* <br/> */}
                        <div style={{ paddingLeft: "18%", paddingTop: "5%", paddingRight: "22%" }} >
                            {/* <button type="submit">Login</button> */}
                            <FacebookLogin
                                appId="555009355423095"
                                autoLoad={false}
                                // fields="name,email,picture"
                                callback={this.responseFacebook}

                            />
                        </div>
                        <br/>
                        <div className="form_entry" >
                            <GoogleLogin
                                clientId="95486344249-eb6pj3dj1lbp5iucq06glg9j01sdt2tq.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>

                    </form>
                </div>
            </div >
        )
    }
}
