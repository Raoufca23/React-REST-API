import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             password : ''
        }
    }
    
    _login() {
        console.log("login function")
    }
    render() {
        return (
            <div>
                <h1>e-OPR</h1>
                <form className="loginForm w-25">
                <div className="form-group text-left">
                    <label>Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group text-left">
                    <label>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>    
                </form>        
            </div>
        );
    }
}

export default Login;
