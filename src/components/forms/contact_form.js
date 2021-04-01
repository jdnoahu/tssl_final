import React, { Component } from 'react'

export default class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: "",

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="contact_form_wrapper">
                <div className="form_header">
                    <h1>Send Us a Message...</h1>
                </div>
                <div className="contract_form_entry_container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="contact_form_entry">
                            <input
                                type="name"
                                name="name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </div>
                        
                        <div className="contact_form_entry">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="contact_message_entry">
                            
                            <input
                                className="contact_message"
                                type="type"
                                name="message"
                                placeholder="Message"
                                value={this.state.message}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="submit_btn">
                            <button type="submit">Cheers!</button>
                        </div>

                    </form>
                </div>
            </div >
        )
    }
}