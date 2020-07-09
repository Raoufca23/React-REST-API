import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import UserDataService from "../../Services/user.service";


export class listUsers extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            users : [],
            idUser : '',
            showModal : false
        }
    }
    
    componentDidMount() {
        this._getAllUsers()
    }
    
    _getAllUsers() {
        UserDataService.getAll()
        .then(response => {
            this.setState({
                users: response.data
            });
        })
        .catch(e => {
            console.log(e);
        });
    }

    _delUser = () => {
        UserDataService.delete(this.state.idUser)
        .then(response => {
            this.setState({
                users : this.state.users.filter(item => item.id.toString() !== this.state.idUser),
                idUser : ''
            })
            this._closeModal()
        })
        .catch(e => {
            console.log(e);
        });
    }

    _openModal = (e) => {
        this.setState({
            showModal : true,
            idUser : e.target.getAttribute('iduser')
        })
        console.log(e.target.getAttribute('iduser'))
    }
    _closeModal = () => {
        this.setState({
            showModal : false
        })
    }

    render() {
        return (
            <div>
                <h1>List users</h1>
                <Modal show={this.state.showModal} onHide={this._closeModal} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation de suppression</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Voulez vous vraiment supprimer cet utilisateur ?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this._closeModal}>
                            Annuler
                        </Button>
                        <Button variant="danger" onClick={this._delUser}>
                            Confirmer
                        </Button>
                    </Modal.Footer>
                </Modal>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th width="50px">N°</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th width="120px">Action</th>
                        </tr>
                    </thead>                   
                    <tbody>
                        {
                            this.state.users.map((item,index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.age}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <Link
                                                to={"/users/" + item.id}
                                                className="badge badge-warning"
                                                style={{marginRight : 3, width : 46}}
                                            >
                                            Edit
                                            </Link>
                                            <Link
                                                to={"#"}
                                                className="badge badge-danger"
                                                iduser={item.id}
                                                onClick={this._openModal}
                                            >
                                            Delete
                                            </Link>
                                        </td>
                                    </tr>     
                                )         
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default listUsers
