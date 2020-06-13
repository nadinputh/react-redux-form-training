import React from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { LOGIN_FORM } from './forms/name';

import LoginForm from './forms/LoginForm';

class Login extends React.Component {
    onSubmit(values) {
        console.log(values);
    }

    render() {
        return (
            <div>
                <div className="row justify-content-md-center">
                    <LoginForm onSubmit={this.onSubmit}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    values: getFormValues(LOGIN_FORM)(state)
});

export default connect(mapStateToProps)(Login);