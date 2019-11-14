import axios from "axios";



const BASEURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=";
const BASEURL2 = "&outputsize=compact&apikey=";
const APIKEY = "SEY5863UOBCH9KA8";
export default {
  search: function(dval) {
    return axios.get(BASEURL + dval + BASEURL2 + APIKEY);
  }
};
