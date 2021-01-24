var userInput;
var userName;
userInput = 5;
userName = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { messsage: message, errorCode: code };
}
generateError('エラーが発生しました', 500);
