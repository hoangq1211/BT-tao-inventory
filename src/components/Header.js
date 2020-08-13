import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Header extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {};
  
    render() {
      return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark" style= {{backgroundColor: 'grey',}}>
                <Link to="/" className="nav-link">
                        <img src="./logo192.png" alt='logo' style= {{width:'42px',height:'42px',}}/>
                </Link>
                
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link><span className="sr-only">(current)</span>
                        </li>
                        <li className="nav-item active">
                            <Link to="/products/" className="nav-link">Products</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/iventory/" className="nav-link">Iventory</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
      );
    }
  }
  
  export default Header;
  