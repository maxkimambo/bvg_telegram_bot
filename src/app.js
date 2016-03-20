var bvg = require('./bvg');
var telegram = require('./telegram')();


function poll(){

  // var b = new bvg();
  // b.getSchedule('loeperplatz').then(function(res){
  //    console.log(res);
  // });

  telegram.getMe();
  telegram.getUpdates().then(function(messages){
    console.log(messages);
      if (messages.result.length > 0){
        var result = messages.result;

        result.forEach(function(item){
          console.log(item.message);
          console.log(item.message.chat.id);
          var chatId = item.message.chat.id;
          var messageId = item.message.message_id;
// reply_to_message_id: messageId
          var message = {
            chat_id: chatId,
            text: "Some say .. "

          }

          //telegram.sendMessage(message);

        });
      }
  });

}

poll();
// setInterval(poll, 10000);
