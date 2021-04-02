
const mysql = require('mysql');
// mysql connection 

const dbConn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'jamal@5997',
    database : 'e-res_database'
});

dbConn.connect(function(error ){
    if(error)throw error;
    console.log("Database connected successfully");
})

module.exports= dbConn;