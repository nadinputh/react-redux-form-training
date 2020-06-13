import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { LOGIN_FORM } from './name';

const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (!/^[A-Z0-9._%+-]{8,16}$/i.test(values.password)) {
        errors.password = 'Please, Provider a valid password!'
    }
    return errors
}

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">{label}</label>
            <input className="form-control" {...input} placeholder={label} type={type} />
            <small id="emailHelp" className="form-text text-danger">{touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}</small>
        </div>
    );

const LoginForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="username" type="text" component={renderField} label="Username" />
            <Field name="password" type="password" component={renderField} label="Password" />
            <button type="submit" className="btn btn-primary" disabled={submitting}>
                Submit
            </button>
            <button type="button" className="btn btn-warning" disabled={pristine || submitting} onClick={reset}>
                Clear Values
            </button>
        </form>
    );
}

export default reduxForm({
    form: LOGIN_FORM,
    validate
})(LoginForm);