/**
 * Created by max on 2/17/16.
 */
var config = {};

config.weather = {
    apiKey: 'YOUR_API_KEY HERE',
    city: 'Berlin',
    hostUrl: 'http://api.openweathermap.org/data/2.5/weather?&q=',
    imageUrl: 'http://openweathermap.org/img/w/',
    refreshInterval : 1000*60*1

};

config.bvg = {
    station : 'Invalidenpark',
    timeToStation : 5,
    refreshInterval : 1000*60*1,
    recordsToFetch : 5
};

config.telegram = {
  apiUrl: 'https://api.telegram.org/bot',
  apiToken: 'YOUR_API_KEY HERE'
};


module.exports = config;
