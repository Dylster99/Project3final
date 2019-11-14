import axios from "axios";


const BASEURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=";
const BASEURL2 = "&outputsize=compact&apikey=";
const APIKEY = "ZQ01F2MEZJSX8EYJ";
export default {
  search: function(dval) {
    return axios.get(BASEURL + dval + BASEURL2 + APIKEY);
  }
};
