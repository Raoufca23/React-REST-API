import React, { Component } from 'react'
import UserDataService from "../../Services/user.service";

export class editUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user : {
                id : null,
                firstName : '',
                lastName : '',
                age : '',
                email : '',
                password : '',
                submitted : false
            }     
        }
    }

    _changeFirstName = (e) => {
        const firstName = e.target.value
        this.setState(prevState => ({
            user : {
                ...prevState.user,
                firstName : firstName
            }         
        }))
    }

    _changeLastName = (e) => {
        const lastName = e.target.value
        this.setState(prevState => ({
            user : {
                ...prevState.user,
                lastName : lastName
            }         
        }))
    }

    _changeAge = (e) => {
        const age = e.target.value
        this.setState(prevState => ({
            user : {
                ...prevState.user,
                age : age
            }         
        }))
    }

    _changeEmail = (e) => {
        const email = e.target.value
        this.setState(prevState => ({
            user : {
                ...prevState.user,
                email : email
            }         
        }))
    }

    _changePassword = (e) => {
        const password = e.target.value
        this.setState(prevState => ({
            user : {
                ...prevState.user,
                password : password
            }         
        }))
    }

    componentDidMount() {
        this._getUser(this.props.match.params.id)
    }
    

    _getUser(id) {
        UserDataService.get(id)
          .then(response => {
            this.setState({
              user: response.data
            });
            //console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    
    _updateTutorial = (e) => {
        e.preventDefault()
        UserDataService.update(
            this.state.user.id,
            this.state.user
        )
        .then(response => {
            console.log(response.data);
            this.setState({
                message: "The user was updated successfully!"
            });
            this.props.history.push('/')
        })
        .catch(e => {
            console.log(e);
        });
    }

    render() {
        const currentUser = this.state.user
        return (
            <div>
                <h1>Edit Users</h1>
                <form className="loginForm w-25" onSubmit={this._updateTutorial}>
                <div className="form-group text-left">
                    <label>First-Name</label>
                    <input type="text" className="form-control"
                     placeholder="Enter firstName" value={currentUser.firstName}
                     onChange={this._changeFirstName} />
                </div>
                <div className="form-group text-left">
                    <label>Last-Name</label>
                    <input type="text" className="form-control" 
                    placeholder="Enter lastName" value={currentUser.lastName}
                    onChange={this._changeLastName} />
                </div>
                <div className="form-group text-left">
                    <label>Age</label>
                    <input type="number" className="form-control"
                     placeholder="Enter age" value={currentUser.age}
                     onChange={this._changeAge} />
                </div>
                <div className="form-group text-left">
                    <label>Email</label>
                    <input type="email" className="form-control"
                     id="exampleInputEmail1" aria-describedby="emailHelp"
                      placeholder="Enter email" value={currentUser.email}
                      onChange={this._changeEmail} />
                </div>
                <div className="form-group text-left">
                    <label>Password</label>
                    <input type="password" className="form-control"
                     id="exampleInputPassword1" placeholder="Password"
                      value={currentUser.password} onChange={this._changePassword} />
                </div>
                <div className="form-group text-left">
                    <button type="submit" className="btn btn-warning w-100">
                        Modifier
                    </button> 
                </div>   
                </form> 
            </div>
        )
    }
}

export default editUser
