import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import Login from './Components/Auth/Login'
import AddUser from "./Components/User/addUser";
import EditUser from "./Components/User/editUser";
import ListUser from "./Components/User/listUsers";

function App() {
  return (
    <div className="App">
      <Router>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/users" className="navbar-brand">
              e-OPR Admin Pan
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/users"} className="nav-link">
                  <button className="btn btn-secondary">
                    Users  
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  <button className="btn btn-success">
                    Ajouter
                  </button>
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/users"]} component={ListUser} />
              <Route exact path="/add" component={AddUser} />
              <Route path="/users/:id" component={EditUser} />
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
