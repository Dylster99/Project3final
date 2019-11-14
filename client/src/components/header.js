import React, {Component} from 'react';
import '../css/header.css';
import { Link } from "react-router-dom";
class Header extends Component{
  state = {
    user: ""
  }
  componentDidMount(){
    this.setState({user: sessionStorage.getItem("username")});
}
handleLogout = (event) => {
  event.preventDefault();
  sessionStorage.clear();
  window.location = '/'
}
  render(){
    return(
      <div className="container">
            <h1 className="title">StockSim</h1>
            <div className="userbx">
              <p className="userP">logged in as: </p>
              <div className="userP">{this.state.user}</div>
                <button
                className="logoutbtn"
                value="logout"
                onClick={this.handleLogout}
                >logout</button>
            </div>
            <div className="dropdown">
                <button className="dropbtn">
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </button>
                    <div className="dropdown-content">
                    <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Search"
            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
            Home
          </Link>
        </li>
      </ul>
    </div>
</div>

</div>
    )
  }
}

export default Header;