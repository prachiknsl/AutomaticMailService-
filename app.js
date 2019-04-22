const schedule=require('node-schedule');
var nodemailer = require('nodemailer');

const j=schedule.scheduleJob('*/5 * * * *',function(){
	console.log('Hii..')
	const transporter = nodemailer.createTransport({
  	service: 'gmail',
  	auth:
  	{
    	user: 'milkmanapi@gmail.com',
    	pass: 'milkman@123'
  	}
	}); 
	const mailOptions={
		from:'milkmanapi@gmail.com',
		to:  'prachikansal09@gmail.com',
		subject:'Milk Delivery',
		text:'HAVE A NICE DAY!!!'
		}

		transporter.sendMail(mailOptions, function(error, info){
  		if (error) {
    		console.log(error);
  			} 
  		else {
    		console.log('Email sent: ' + info.response);
  			}
		});
});