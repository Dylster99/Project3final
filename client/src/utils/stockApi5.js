import axios from "axios";



const BASEURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=";
const BASEURL2 = "&outputsize=compact&apikey=";
const APIKEY = "YR0D8QT7VLZDIST6";
export default {
  search: function(dval) {
    return axios.get(BASEURL + dval + BASEURL2 + APIKEY);
  }
};
