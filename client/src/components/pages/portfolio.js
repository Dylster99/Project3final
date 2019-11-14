import React, {Component} from 'react';
import Header from '../header';
import API from '../../utils/api';
import * as moment from 'moment';
import '../../css/watchlist.css'
import search1 from '../../utils/stockApi4';
import Stockdiv from '../stockdiv';

//needed for api
const year = moment().format("YYYY");
const month = moment().format("MM");
const day = moment().format("DD");
let todaysdate;
const dayofweek = moment().format("dddd");
if (dayofweek === "Monday" || 
dayofweek === "Tuesday" || 
dayofweek === "Wednesday" || 
dayofweek === "Thursday" || 
dayofweek === "Friday") {
todaysdate = [year, month, day].join('-');
}
if (dayofweek === "Sunday") {
   let recentday = (moment().subtract(2, 'days').format("DD"));
   todaysdate = [year, month, recentday].join('-');
}
if (dayofweek === "Saturday") {
    let recentday = (moment().subtract(1, 'days').format("DD"));
    todaysdate = [year, month, recentday].join('-');
}
 

class Portfolio extends Component{
    componentDidMount(){
        this.setState({user: sessionStorage.getItem("username")})
        this.timeoutcall()
        
    }
    state = {
        userFollow: [],
        user: "",
    }
    timeoutcall = () => {
        setTimeout(this.followedStocks, 100);
    }

    handleclick = (event) => {
        event.preventDefault();
        let searchValue = event.target.value;
        console.log(searchValue);
        search1.search(searchValue).then(res => {
            const dailySeries = "$"+res.data["Time Series (Daily)"][todaysdate]['4. close'];
            if (dailySeries !== undefined){
            
            console.log(dailySeries);
            this.setState({
                [searchValue]:dailySeries
            });
        } else if(dailySeries === undefined) {
            alert("our API sucks please wait ;)")
        }
            console.log(this.state);
        });
    }
    
    handleUnfollow = (event) => {
        event.preventDefault();
        let stockunfollow = {
            owner: this.state.user,
            stock_name: event.target.value
        }
        console.log(stockunfollow);
        API.deleteStock({stockunfollow}).then(res => {
            window.location.reload()
        })
    }
    followedStocks = () => {
        let user = {
            user: this.state.user
        }
        let userFollowArry = []
        API.getStocks(user).then(res => {
            for (let i = 0; i < res.data.length; i++){
                userFollowArry.push(res.data[i].stock_name)
                // this.setState({userFollow: res.data[i].stock_name})
                this.setState({userFollow: userFollowArry})
            }
            console.log(this.state.userFollow)

        })
    }
render(){
 
 
    return (
        <div>
        <Header />
        <div>
            <h1 className="wathclistTitle"
            >Welcome {this.state.user} to your WatchList</h1>
            <div className="boxxxs">
                {this.state.userFollow.map(stock => {
                    return <Stockdiv key={stock}
                    handleclick={this.handleclick}
                    name={stock}
                    handleUnfollow={this.handleUnfollow}
                    >
                        {this.state[stock]}
                    </Stockdiv>
                })} 
                </div>
        </div>
    </div>
    )
}
}

export default Portfolio;
