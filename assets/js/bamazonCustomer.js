// required packages
const mysql = require("mysql");
const inquirer = ("inquirer");


// connection to datebase
// change user and pw?
const connection = mysql.createConnection({
    host : "localhost",
    user: "root",
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

const shopping = function() {
    inquirer.prompt({
        name: "buyingProduct",
        type: "input",
        message: "Enter the Product ID of the item you want to purchase."
    })
    .then
}