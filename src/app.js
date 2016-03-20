var bvg = require('./bvg');



function poll(){

  var b = new bvg();
  b.getSchedule('loeperplatz').then(function(res){
     console.log(res); 
  });

}


poll();
