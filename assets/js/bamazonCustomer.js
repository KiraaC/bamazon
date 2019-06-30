// required packages
const mysql = require("mysql");
const inquirer = ("inquirer");


// connection to datebase
const connection = mysql.createConnection({
    host : "localhost",
    user: ""
    password: "",
    database: "bamazonDB",
    port: 4000
})

// display variable
connection.connect();
const display = function(){
// connects to the datebase with a query
    connection.query("SELECT * FROM products", function(err, res){
        if(err) throw err;
        
    })
}