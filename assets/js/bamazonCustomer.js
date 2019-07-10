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
function start() {
    inquirer.prompt([
        {
            type: "rawlist",
            name: "buyingProduct",
            // message: "Enter the new Product ID of the item you want to purchase.",
            choices: ["Enter the new Product ID of the item you want to purchase.", "Exit Bamazon Shopping"],
            // [Quit with Q]",
            // validate: function(val) {
            //   return val > 0 || val.toLowerCase() === "q";
        },
    ])
        .then(function (answers) {
            if (answers.buyingProduct.indexOf( "Exit") >=0 ){
                process.exit()
            }
            console.log(answers.buyingProduct)
            if (answers.buyingProduct.indexOf("Enter")  >= 0){
                buyMoreProduct ()
            }
    
            // console.log(answers)
            // connection.query("SELECT * FROM products WHERE id = " + answers.buyingProduct, function (err, res) {
            //     if (err) {
            //         throw err;
            
            //     }
            //     else {
            //         if (answers.quantity > res[0].stock_quantity)
            //         console.log("Insufficent quantity!")
            //         else {
            //             console.log("order placed")
            //         }
            //             // (res[0].stock_quantity < answers.stock_quantity);
            //     }
                
            // });
        });
}


// let data = result[0];
// let stock_quantity = data.stock_quantity;
// let addNewQuantity = parseInt(stock_quantity) + parseInt(addNewQuantity);


function buyMoreProduct () {
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
        console.log("answers.buyingProduct " + answers.buyingProduct)
        
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
                start ()
                    // (res[0].stock_quantity < answers.stock_quantity);
            }
            
        });
    });
}
start()
