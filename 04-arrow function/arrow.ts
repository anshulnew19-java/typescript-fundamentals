// In older way we define function like this way
let log = function(message){
    console.log(message);
}

var message = "Hello World 1";
log(message);



// The same thing we define through Arrow Function 
let doLog = (doMessage) => console.log(doMessage);

let doMessage = "Hello World 2";
doLog(doMessage);


