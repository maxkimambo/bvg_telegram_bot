var bvg = require('./bvg');
var telegram = require('./telegram')();
var _ = require('underscore');


var lastUpdateId = 0;

function poll(offset){

  // var b = new bvg();
  // b.getSchedule('loeperplatz').then(function(res){
  //    console.log(res);
  // });

  telegram.getMe();
  telegram.getUpdates(offset).then(function(messages){
      // console.log(messages);
      // console.log(messages.result);

      if (messages.result.length > 0){
        var result = messages.result;

        result.forEach(function(item){

          // console.log(item.message.chat.id);

          var chatId = item.message.chat.id;
          var messageId = item.message.message_id;

          console.log(messageId);
// reply_to_message_id: messageId
          var message = {
            chat_id: chatId,
            text: "Some say .. I am a bot m#$%$ker"

          }
            lastUpdateId = item.update_id;
            //
          telegram.sendMessage(message);

        });
      }
  });

}

setInterval(function(){

  console.log('last udpate id %s', lastUpdateId);
  poll(lastUpdateId);
}, 10000);
