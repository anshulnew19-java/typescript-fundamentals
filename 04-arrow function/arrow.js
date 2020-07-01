// In older way we define function like this way
var log = function (message) {
    console.log(message);
};
var message = "Hello World 1";
log(message);
// The same thing we define through Arrow Function 
var doLog = function (doMessage) { return console.log(doMessage); };
var doMessage = "Hello World 2";
doLog(doMessage);
