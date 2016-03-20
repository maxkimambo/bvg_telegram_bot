var bvg = require('./bvg');
var telegram = require('./telegram')();
var _ = require('underscore');
var lastUpdateId = 0;

function poll(offset){
  telegram.getUpdates(offset).then(function(messages){

      if (messages.result.length > 0){
        var result = messages.result;

        result.forEach(function(item){

          var chatId = item.message.chat.id;
          var messageId = item.message.message_id;
          // reply_to_message_id: messageId
          var message = {
            chat_id: chatId,
            text: "Some say .. I am a bot m#$%$ker"

          }
            lastUpdateId = item.update_id;

        });
      }
  });

}

setInterval(function(){
  poll(lastUpdateId);
}, 10000);
