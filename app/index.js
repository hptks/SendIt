var server=require("./server");
var router=require("./route");
var requestHandler=require("./requestHandlers");

var handle={};
handle["/"]=requestHandler.sendEmail;
server.start(router.route,handle);