var bvg = require('./bvg');
var telegram = require('./telegram')();


function poll(){

  // var b = new bvg();
  // b.getSchedule('loeperplatz').then(function(res){
  //    console.log(res);
  // });

  telegram.getMe(); 
}


poll();
