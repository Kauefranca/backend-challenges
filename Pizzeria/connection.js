require('dotenv').config()
const mysql = require('mysql');

module.exports = class MySql {
	constructor () {
		this.connection = mysql.createConnection({
		   host     : process.env.MYSQL_HOST,
		   user     : process.env.MYSQL_USER,
		   password : process.env.MYSQL_PASSWORD,
		   database : process.env.MYSQL_DATABASE
		});

		this.connection.connect();
	};

	destructor() {
		this.connection.end();
	}
};