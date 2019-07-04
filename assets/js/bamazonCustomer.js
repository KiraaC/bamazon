// required packages
const mysql = require("mysql");
const inquirer = require("inquirer");


// connection to datebase
// change user and pw?
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Siryessir!1",
    database: "bamazonDB",
    port: 4000
})


inquirer.prompt([
    {
        type: "input",
        name: "buyingProduct",
        message: "Enter the Product ID of the item you want to purchase."
    },
    {
        type: "input",
        name: "quantity",
        message: "How many units of the product they would like to buy?"
    }
])

    .then(function (answers) {
        console.log(answers)
    });

// check work
// // display variable
// connection.connect();
let table = newTable;
const display = results.forEach(function (product) {
    table("Item", product.item_id);
    table("Product", product.product_name);
    table("Department");
    table("Price");
    table("Quantity", product.stock_quantity);

    // connects to the datebase with a query
    connection.query("SELECT * FROM products WHERE item_id = " + answers.item_id, function (err, res) {
        if (err) throw err;
        console.log("Welcome to Bamazon Shopping")
    });
}

if  (true)  {
    // (results[0]product.stock_quantity < answers.stock_quantity);
    console.log("Insufficent quantity!")
}

// run with node

// displays in node
// answers objects with console.log
// { buyingProduct: '1', quantity: '10' }
