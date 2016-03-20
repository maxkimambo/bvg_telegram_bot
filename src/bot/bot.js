var S = require('string');
var q = require('q');


function bot(){

var validCommands = {
   "station" : getStationInfo,
   "help": displayHelp,
   "trip": getTripInfo
}
  function getStationInfo(stationName){

  }

  function getTripInfo(start, end){

  }

  function displayHelp(){
    var defer = q.defer();
    defer.resolve('Some help text to go here'); 

    return defer.promise;
  }

    function parseMessage(message){
        if (S(message).startsWith('/')){
          console.log('valid message');
          return displayHelp;
        }
    }

    function executeCommand(command, param){
       console.log('executed');
     }

  return {
    parseMessage: parseMessage,
    executeCommand: executeCommand
  }
}
module.exports = bot;
