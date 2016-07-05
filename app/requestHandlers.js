var fs=require("fs");
var qs=require("querystring");
var nodemailer=require("nodemailer");
var nodemailer_smtp=require("nodemailer-smtp-transport");

function sendIt(senderName,senderEmail,senderPassword,recepient,message) {
	var transporter=nodemailer.createTransport(nodemailer_smtp({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: senderEmail,
			pass: senderPassword
		}
	}));

	var mailOptions={
		from: senderName+" <"+senderEmail+">",
		to: recepient,
		subject: "no-reply",
		text: message
	};

	transporter.sendMail(mailOptions, function(error,info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent.");
		}
	});
}

function sendEmail(response,postData) {
	var path=__dirname.substring(0,__dirname.length-3)+"html/sendEmailForm.html";
	var form=fs.createReadStream(path);
	var content="";
	form.on("data", function(data) {
		content+=data;
	});
	form.on("end", function() {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(content.toString());
		response.end();
	});
	
	if (postData.length>25) {
		var senderName=qs.parse(postData).nameOfSender.toString();
		var senderEmail=qs.parse(postData).emailOfSender.toString();
		var senderPassword=qs.parse(postData).passwordOfSender.toString();
		var recepient=qs.parse(postData).emailOfRecepient.toString();
		var message=qs.parse(postData).text.toString();
		if (senderName.length!=0 && senderEmail.length!=0 && 
			senderPassword.length!=0 && recepient.length!=0 && 
			message.length!=0) {
				sendIt(senderName,senderEmail,senderPassword,recepient,message);
		} else {
			console.log("Cannot send email.");
		}
	} else {}
}

exports.sendEmail=sendEmail;