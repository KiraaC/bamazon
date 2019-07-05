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
    port: 3306
});

// let data = result[0];
// let stock_quantity = data.stock_quantity;
// let addNewQuantity = parseInt(stock_quantity) + parseInt(addNewQuantity);

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
        connection.query("SELECT * FROM products WHERE id = " + answers.buyingProduct, function (err, res) {
            if (err) {
                throw err;
        
            }
            else {
                if (answers.quantity > res[0].stock_quantity)
                console.log("Insufficent quantity!")
                else {
                    console.log("order placed")
                }
                buyMoreProduct()
                    // (res[0].stock_quantity < answers.stock_quantity);
            }
            
        });
    });



function buyMoreProduct () {
inquirer.prompt([
    {
        type: "input",
        name: "buyingProduct",
        message: "Enter the new Product ID of the item you want to purchase."
    },
    {
        type: "input",
        name: "quantity",
        message: "How many units of the new product they would like to buy?"
    }
])
   
    .then(function (answers) {
        console.log(answers)
        connection.query("SELECT * FROM products WHERE id = " + answers.buyingProduct, function (err, res) {
            if (err) {
                throw err;
        
            }
            else {
                if (answers.quantity > res[0].stock_quantity)
                console.log("Insufficent quantity!")
                else {
                    console.log("order placed")
                }
                buyMoreProduct ()
                    // (res[0].stock_quantity < answers.stock_quantity);
            }
            
        });
    });
}


// check work
// // display variable
// connection.connect();

// let table = newTable;
// const display = results.forEach(function (product) {
//     table("Item", product.item_id);
//     table("Product", product.product_name);
//     table("Department");
//     table("Price");
//     table("Quantity", product.stock_quantity);
// };