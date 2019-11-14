import React, {Component} from 'react';
import { Link } from "react-router-dom";
import API from '../../utils/api';
import '../../css/login.css';
class Login extends Component {

    state = {
       username: "",
       password: "",
       loginRes: "" 
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    handleSubmit = event => {
        event.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(user);
        API.getUser(user).then(res => {
            if (!res.data){
                this.setState({loginRes: "incorrect username or password!"});
                console.log(this.state.loginRes);
            }
            else {
                window.location = '/portfolio'
                sessionStorage.setItem("username", this.state.username)
            }
        });
    }
    
    

    render(){ 
        return (
            <div className="loginbx">
                <div className="loginform">
                    <div className="words">
                        Log In!
                        <p className="loginErr"
                        >
                        {this.state.loginRes}
                        </p>
                    </div>
                    <div>
                        <input
                        className="input" 
                        type="text" 
                        placeholder="User Name"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name='username'
                        ></input>
                        <input
                        className="input" 
                        type="password" 
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name='password'
                        ></input>
                        <button
                        className="createAccbtn" 
                        type="submit" 
                        value="submit"
                        onClick={this.handleSubmit}
                        ><span>Login</span></button>
                        <Link
                        to="/account"
                        className={window.location.pathname === "/account" ? "nav-link active" : "nav-link"} 
                        ><button className="createAccbtn">
                        <span>Don't have an account?</span>
                        </button>
                        </Link>
                    </div>
                </div>
        </div>
        )
} 

}

export default Login;