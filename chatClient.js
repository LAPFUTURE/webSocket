//连接mysql,连接池
const mysql      = require('mysql');
let pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'sgsds',
  connectionLimit : 10,
});
 
pool.query('select * from sgs_user', function (error, results, fields) {
  if (error) throw error;
  console.log('The user is: ', results[0]);
});

//单连接
// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'sgsds',
// });
 
// connection.connect();
 
// connection.query('select * from sgs_user', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The user is: ', results[0]);
// });
 
// connection.end();



