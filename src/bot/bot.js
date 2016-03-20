var S = require('string');
var q = require('q');
var bvgClient = require('./../bvg');
var bvg = new bvgClient();


function bot(){

  var validCommands = {
    "station" : getStationInfo,
    "help": displayHelp,
    "trip": getTripInfo
  }
  function getStationInfo(stationName){
    console.log(stationName);

    var defer = q.defer();

    bvg.getSchedule(stationName).then(function(result){
      var messageData = "*Arrivals/departures @ " + stationName +"* \n";
      console.log(result);
        if(result.length == 0){
            messageData += "I can't find the station you are looking for, check the spelling and try again";
        }

        result.forEach(function(item){
          messageData += item.departure;
          messageData += item.line;
          messageData += item.direction;
          messageData += '---------------------- \n'
        });

        console.log(messageData);


        defer.resolve(messageData);
    });

    return defer.promise;

  }

  function getTripInfo(stationName){
    console.log(stationName);

    var defer = q.defer();

    defer.resolve('Trip info :)');

    return defer.promise;
  }

  function displayHelp(){
    var defer = q.defer();

    var helpText = "*This bot supports the following commands * \n" +
    "*/help* displays this message \n" +
    "*/station* Shows arrivals and departure for a given station \n" +
    "e.g _/station loeperplatz_ \n" +
    "*/trip* Gives you connection information \n" +
    "/trip start:endstation \n"

    defer.resolve(helpText);

    return defer.promise;
  }

  function parseMessage(message){

    if (!S(message).startsWith('/')){
      return displayHelp();
    }
    var endIndex = message.indexOf(" ");
    var command = message.substring(1, endIndex);

    var params = message.substring(endIndex, message.length);

    switch (command) {
      case 'station':
        return getStationInfo(params);

      case 'trip':
        return getTripInfo(params);

      default: return displayHelp();
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
