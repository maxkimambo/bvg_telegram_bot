var telegram = require('./telegram')();
var bot = require('./bot')();


var lastUpdateId = 0;

function errorHandler(err){
  console.error(err);
}

function poll(offset){

   telegram.getUpdates(offset).then(function(messages){

      if (messages.result.length > 0){
        var result = messages.result;

        result.forEach(function(item){

          var chatId = item.message.chat.id;
          var messageId = item.message.message_id;
          // reply_to_message_id: messageId

          var command = bot.parseMessage(item.message.text);

          // execute the resulting command
          // send the output as a message to the user.

          command.then(function(result){
            var message = {
              chat_id: chatId,
              parse_mode: 'Markdown',
              text: result
            }

              telegram.sendMessage(message);

          }, errorHandler);

          lastUpdateId = item.update_id;

        });
      }
  });

}

setInterval(function(){
  poll(lastUpdateId);
}, 10000);
