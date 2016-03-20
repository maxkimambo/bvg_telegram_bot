var client = require('./../httpClient');
var config = require('./../config/config');

var httpClient = new client();

function telegram(){

  var endpoint = config.telegram.apiUrl + config.telegram.apiToken;

  /**
  * Sanity check method
  * Fetches bot info. 
  */
  function getMe(){
    var command = endpoint + '/getme';
      httpClient.get(command).then(function(res){
         console.log(res);
      });
    }

  function getUpdates(){

  }

  return {
    getMe: getMe,
    getUpdates: getUpdates
  }
}

module.exports = telegram;
