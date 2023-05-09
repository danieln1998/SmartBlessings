

var express = require('express');

var router = express.Router();

var database = require('../database');


var cnt1=0;
router.get("/", function (request, response, next){

	

	 var query = `
SELECT * FROM SmartBlessings 
WHERE the_blessing != '' &&identification =0

`;

	database.query(query,  function(error, data){

		
		if(data.length>0){
			if(error)
			{
				throw error;  
				
			}
			else
			{
		 
			console.log(data.length);
			
	
			var now = new Date(); 
			var hours = now.getHours();
			
			var minutes = now.getMinutes(); 
                         
			var seconds = now.getSeconds(); 
				
			
				
			var timetotal;
			if(hours<10){
                       timetotal="0"+hours.toString();
			}
			else{
				timetotal=hours.toString();
			}
			if(minutes<10){
				timetotal+=":"+"0"+minutes.toString();
			}
			else{
				timetotal+=":"+minutes.toString();
			}
			if(seconds<10){
				timetotal+=":"+"0"+seconds.toString();
			}
			else{
				timetotal+=":"+seconds.toString();

			}
            
			  
				response.render('d', {title:'data',  dp:data,cnt:cnt1,textColor:data[cnt1].textColor,bgColor:data[cnt1].bgColor});

				var q = `
			UPDATE SmartBlessings  SET identification = 1 , timee="${timetotal}"  WHERE id = "${data[cnt1].id}"
			`;
		 
		 
			database.query(q, function(error, data){
		 
				if(error)
				{
					throw error;
				}	
				
		 
			});
			    
				  
			}

		 }

		   else{
			response.redirect('/videoN');
          
		  } 
		
	 
    
	});
  
});






router.get("/showGreeting", function(request, response, next){

	response.render("V1", {title:'video'});

});



router.get("/videoN", function(request, response, next){

            
	response.render("video",{title:'video'});

});






module.exports = router;


