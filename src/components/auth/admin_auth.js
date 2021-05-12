import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';

export default class AdminAuth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            redirectNext:false
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        axios.get("https://tssl-backend.herokuapp.com/admins"
            ,{ withCredentials: false }
        ).then(response => {
            console.log("response", response);
            var arr = response.data;
            console.log("response", arr);

            var searchedData = arr.filter(item => item.email === this.state.email && item.password === this.state.password)
            console.log("response", searchedData);
            if (searchedData.length != 0) {
                this.setState({
                    redirectNext: true
                })
            }
            else {
                alert("Wrong Username or password!")
            }
        })
            .catch(error => {
                console.log(error.response)
            });

        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>LOGIN TO DASHBOARD</h1>
                {this.state.redirectNext == true ? <Redirect to="/admin/add_blog" /> : null}
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <button type="submit">LOGIN</button>
                </form>
            </div>
        );
    }
}
