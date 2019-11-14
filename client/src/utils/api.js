import axios from "axios";

export default {
  // Gets all users
  getUser: function(user) {

    console.log('hello', user)
    return axios.post("/api/user/login", user);
  },

  newUser: function(userData) {

    console.log('HELLO', userData);
    return axios.post("/api/user", userData);
  },
  newStock: function(stockData) {

    console.log("hello", stockData);
    return axios.post("/api/user/stock", stockData);
  }, 
  getStocks: function(stocks) {
    console.log('searching stocks', stocks)
    return axios.post('/api/user/search', stocks)
  },
  deleteStock: function (stocks) {
    console.log('deleting stock ', stocks)
    return axios.post('/api/user/delete', stocks)
  }
};
