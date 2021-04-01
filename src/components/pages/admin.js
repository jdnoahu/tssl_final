import React, { Component } from 'react';
import Navigation from '../navigation';
import authImage from "../../components/photos/Auth/authorization.jpg"
import AdminAuth from '../auth/admin_auth';

export default class Auth extends Component {
    render() {
        return (
            <div className="auth_page"><Navigation />
                <div className="auth_page_wrapper">
                    <div className="left_column"
                        style={{
                            backgroundImage: `url(${authImage})`
                        }}
                    />


                    <div className="right_column">
                        <AdminAuth />
                    </div>

                </div>
            </div>
        );
    }
}
