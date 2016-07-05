var http=require("http");
var url=require("url");

function start(route,handle) {
	function onRequest(request,response) {
		var pathname=url.parse(request.url).pathname;
		var postData="";
		request.addListener("data", function(data) {
			postData+=data;
		});
		request.addListener("end", function() {
			route(pathname,handle,response,postData);
		});
	}

	http.createServer(onRequest).listen(8888);
}

exports.start=start;