import React, {Component} from 'react';
import '../css/recomend.css';
import API from '../utils/stockApi';

class Recomend extends Component{

  componentDidMount(){
    this.currentStock();
  }
  
  state = {
    stock: "",
    stockArry :["AMZN","GOOGL","GOOG","JNJ","BRK.B","JPM","DIS"],
    value: "",
    changePercentage: "",
    priceArray: "",
    dateArray: "",
    upDown: "",
  }
  
  searchData = query => {
    const priceArray = [];
    const dateArray = [];
    API.search(query)
    .then(res => {
      const dailySeries = res.data["Time Series (Daily)"];
      for (let key in dailySeries){
        // console.log('Time: ', key, 'price: ' ,dailySeries[key]['4. close']);
        dateArray.push([key][0])
        priceArray.push(dailySeries[key]['4. close']);
      }
    this.setState({priceArray: priceArray,
        dateArray: dateArray,
    })
    this.setState({changePercentage: (((this.state.priceArray[0])/(this.state.priceArray[1])*100)-100).toString().slice(0,4)+"%"})
    console.log(this.state.changePercentage)
    })
    if (Math.sign(this.state.changePercentage) === 1){
      this.setState({upDown: "green"})
    } else {
      this.setState({upDown: "red"})
    }
    // if (this.state.upDown === "up") {

    // }
  }
    
  currentStock = () => {
    let i = 0;
    const interval = setInterval(() => {
    console.log(this.state.stockArry[i]);
    let switchedStock = this.state.stockArry[i];
    i += 1;
    this.setState({
      stock: switchedStock
    });
    this.searchData(this.state.stock)
    if (i >= this.state.stockArry.length) {
      clearInterval(interval)
      this.currentStock();
      
    }
    }, 13000);
  }

    render(){
        {if (this.state.changePercentage === NaN || this.state.changePercentage === ""){
        return(
          <div className="recomendBX">
          <p className="stockTxt">Popular Stocks</p>
          <h3 className="stockTxt">please wait for our slow API ;)</h3>
        </div>
        )
        } else {
        return(
        <div className="recomendBX">
          <p className="stockTxt">Popular Stocks</p>
          <h3 className="stockTxt">{this.state.stock}</h3>
        <p className="changepercent stockTxt" style={{'color': this.state.upDown}}>
          {this.state.changePercentage}
        </p>
        </div>
    )
  }}
  }
}
export default Recomend