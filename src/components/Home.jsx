import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Welcome to <code>React Redux Form</code>
                    </p>
                    <Link to="/account/signin">SIGN IN</Link>
                </header>
            </div>
        )
    }
}

export default Home;