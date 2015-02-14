var stocks = require("./lib/stocks.js"),
    quotes = require("./lib/quotes.js");

var baseUrl = "http://query.yahooapis.com/v1/public/yql";

var getRequest = function _getRequest(url, next) {
  http.get(url, function(response) {
    response.on('data', function(data) {
      data = JSON.parse(data);

      if (data.Message) {
        return next(data.Message);
      }
      else {
        return next(null, data);
      }
    });
  }).on('error', function(e) {
    return next(e.message);
  });
};




module.exports.stocks = stocks;
module.exports.quotes = quotes; 
