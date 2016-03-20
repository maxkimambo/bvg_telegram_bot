var client = require('./../httpClient');
var config = require('./../config/config');


var q = require('q');

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

  /**
  * Fetches new messages from telegram
  *
  */
  function getUpdates(offset){
      console.log('offset is %s',offset);

      var command = endpoint + '/getupdates';

      // if offset specified use that
      if(offset){
        // increment offset so that we only fetch the next unseen message
        offset ++; 
        command +='?offset='+offset;
      }
      console.log(command);
      var deferred = q.defer();

      console.log('checking for new messages ... ');
      httpClient.get(command).then(function(result){

       var messages = JSON.parse(result);
          deferred.resolve(messages);

          if (messages.ok){
            deferred.resolve(messages);
          }else{
            deferred.reject;
          }
      });
      return deferred.promise;
  }
  /**
   * Sends message to telegram api
   */
  function sendMessage(message){
      var command = endpoint +'/sendMessage';
      httpClient.post(command, message)
          .then(function(result){
              console.log(result);
          })
  }

/**
 * Prints out errors.
 */
  function handleErrors(error){
      console.error(error);
  }


  return {
    getMe: getMe,
    getUpdates: getUpdates,
    sendMessage: sendMessage
  }
}

module.exports = telegram;
