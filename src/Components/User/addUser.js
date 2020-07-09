import React, { Component } from 'react'
import UserDataService from "../../Services/user.service";


export class addUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id : null,
            firstName : '',
            lastName : '',
            age : '',
            email : '',
            password : '',
            submitted : false
        }
    }

    _changeFirstName = (e) => {
        this.setState({
            firstName : e.target.value
        })
    }

    _changeLastName = (e) => {
        this.setState({
            lastName : e.target.value
        })
    }

    _changeAge = (e) => {
        this.setState({
            age : e.target.value
        })
    }

    _changeEmail = (e) => {
        this.setState({
            email : e.target.value
        })
    }

    _changePassword = (e) => {
        this.setState({
            password : e.target.value
        })
    }
    
    _saveUser = (e) => {
        e.preventDefault()
        var data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            email: this.state.email,
            password: this.state.password
        };
        UserDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    age: response.data.age,
                    email: response.data.email,
                    password: response.data.password,
                    submitted: true
                });
                console.log(response.data);
                this.props.history.push('/')  
            })
            .catch(e => {
                    console.log(e);
            });   
    }

    render() {
        return (
            <div>
                <h1>Adding Users</h1>
                <form className="loginForm w-25" onSubmit={this._saveUser}>
                <div className="form-group text-left">
                    <label>First-Name</label>
                    <input type="text" className="form-control"
                     placeholder="Enter firstName" value={this.state.firstName}
                     onChange={this._changeFirstName} />
                </div>
                <div className="form-group text-left">
                    <label>Last-Name</label>
                    <input type="text" className="form-control" 
                    placeholder="Enter lastName" value={this.state.lastName}
                    onChange={this._changeLastName} />
                </div>
                <div className="form-group text-left">
                    <label>Age</label>
                    <input type="number" className="form-control"
                     placeholder="Enter age" value={this.state.age}
                     onChange={this._changeAge} />
                </div>
                <div className="form-group text-left">
                    <label>Email</label>
                    <input type="email" className="form-control"
                     id="exampleInputEmail1" aria-describedby="emailHelp"
                      placeholder="Enter email" value={this.state.email}
                      onChange={this._changeEmail} />
                </div>
                <div className="form-group text-left">
                    <label>Password</label>
                    <input type="password" className="form-control"
                     id="exampleInputPassword1" placeholder="Password"
                      value={this.state.password} onChange={this._changePassword} />
                </div>
                <div className="form-group text-left">
                    <button type="submit" className="btn btn-success w-100">
                        Ajouter
                    </button>    
                </div>
                </form> 
            </div>
        )
    }
}

export default addUser
