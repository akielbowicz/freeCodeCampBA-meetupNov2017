function getShortMessages(messages) {

    var messageList =  messages.map(function(elem){return elem.message})
    return messageList.filter(function(word){return word.length < 50})
     }
    module.exports = getShortMessages
