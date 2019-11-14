import React, { Component } from 'react';
import API from '../../utils/api';
import '../../css/account.css'
class Account extends Component {
    state ={
        user: "",
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
            username: this.state.user,
            password: this.state.password
        }

        API.newUser(user).then(res => {
            if (res.data.err){
                this.setState({loginRes: "User already exists"});
                console.log(this.state.loginRes);
            }
            else {
                window.location = '/portfolio'
                this.setState({loginRes: "Welcome"})
                console.log("user created");
            }
        });
    }

    render(){
        return (
        <div className='accForm'>
            <div className='formbx'>

                <div className='words'>
                    Create an Account
                    <p className="accountErr"
                    >
                        {this.state.loginRes}
                    </p>
                </div>
                <div>
                    <input
                    className='input'
                    type="text" 
                    placeholder="User Name"
                    name="user"
                    onChange={this.handleInputChange} 
                    value={this.state.username}
                    ></input>
                    <input
                    className='input' 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    onChange={this.handleInputChange} 
                    value={this.state.password}
                    ></input>
                    <button
                    className='submitbtn'
                    type="submit" 
                    value="submit" 
                    onClick={this.handleSubmit}
                    ><span>Submit </span></button>
                </div>
                </div>
        </div>
        )
    }

}

export default Account;