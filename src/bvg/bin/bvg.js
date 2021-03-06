/**
 * Created by max on 2/16/16.
 */
var http = require('./../../httpClient');
var cheerio = require('cheerio');
var q = require('q');
var config = require('./../../config/config');
var httpClient = new http();

var bvg = function (){
    function getSchedule(stationName){
      var defer = q.defer();

      var url ='http://mobil.bvg.de/Fahrinfo/bin/stboard.bin/dox?ld=0.1&input='+ stationName +'&boardType=depRT&start=yes';

      httpClient.get(url).then(function(res){

          var scheduleData = [];

          var $ = cheerio.load(res);

          var rows = $('table>tbody').find('tr');

          for (var i =0; i < config.bvg.recordsToFetch; i++){
              var scheduleItem = {};

                var current = rows[i];

                if (current){

                scheduleItem.departure = $(current).children().first().text().replace('*', '');
                scheduleItem.line = $(current).children().eq(1).text();
                scheduleItem.direction = $(current).children().last().text();

                scheduleData[i] = scheduleItem;
              }
          }

         defer.resolve(scheduleData);
      });

      return defer.promise;
    }

  return {
    getSchedule: getSchedule
  }

};

module.exports = bvg(); 
