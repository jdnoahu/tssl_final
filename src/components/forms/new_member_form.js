import React, { Component } from 'react';
import axios from 'axios'
import { Input, FormGroup, Label, FormText } from 'reactstrap'
var DatePicker = require("reactstrap-date-picker");

export default class NewMemberForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            sobriety_date: "",
            email: "",
            password: "",
            re_password: "",
            date: "",
            value: new Date().toISOString(),
            formattedValue: "",
            redirectNext:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleDateChange(value, formattedValue) {
        this.setState({
            value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
            formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
        })
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(event) {
        axios.post("https://tssl-backend.herokuapp.com/member",
            {
                member: {
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    sobriety_date: this.state.sobriety_date,
                    email: this.state.email,
                    password: this.state.password
                }
            },
        ).then(response => {
            console.log("response", response);
            this.setState({
                redirectNext:true 
            })
        })
            .catch(error => {
                console.log(error.response)
            });
        event.preventDefault();
    }

    render() {
        return (
            <div className="new_member_form_wrapper">
                <div className="form_header">
                    <h1>Get an Account...</h1>
                </div>
                <div className="new_member_form_entry_container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form_entry">
                            <input
                                type="name"
                                name="first_name"
                                placeholder="First Name"
                                value={this.state.first_name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form_entry">
                            <input
                                type="name"
                                name="last_name"
                                placeholder="Last Name"
                                value={this.state.last_name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form_entry">
                            <input
                                type="text"
                                onFocus="(this.type='date')"
                                name="sobriety_date"
                                placeholder="Sobriety Date"
                                value={this.state.sobriety_date}
                                onChange={this.handleChange}
                            />
                        </div>
                        {/* <div className="form_entry">
                            <Input id="date" type="date" name="date" dateFormat="MM-DD-YYYY" value={this.state.date} onChange={this.changeHandler} placeholder="Date" />
                            <FormGroup>
                            <DatePicker id="example-datepicker"
                                value={this.state.value}
                                onChange={(v, f) => this.handleDateChange(v, f)} />
                                </FormGroup>
                        </div> */}
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
                        <div className="form_entry">
                            <input
                                type="password"
                                name="re_password"
                                placeholder="Re-type Password"
                                value={this.state.re_password}
                                onChange={this.handleChange}
                            />
                        </div>
                        {this.state.redirectNext == true ? <Redirect to="/member" />:null}
                        <div className="submit_btn">
                            <button type="submit">Login</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}
