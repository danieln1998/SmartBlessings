

const mysql = require('mysql2');
const fs= require('fs');
var dotenv=require('dotenv');
dotenv.config();

const connection= mysql.createConnection({host:"db4free.net",
 user:"danible",
  password:process.env.PASSWORD,
   database:"mydbble",
    port:3306,
	charset: 'utf8mb4',
	//  ssl:{ca:fs.readFileSync("DigiCertGlobalRootCA.crt.pem")}
	
	
	});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;
