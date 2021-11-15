
const express = require("express");
const bodyParser = require("body-parser");
const app = express();







app.use(bodyParser.urlencoded({extended: true})); //bodyParser is part of express so you can access it via the use() methid of the express module.
//urlencoded


app.get("/", function(req, res) { //this is a call back funciton.
  res.sendFile(__dirname + "/bmiCalculator.html");
  // res.send("<h1>BMI Calculator!</h1>");
})

app.post("/", function(req, res) { //.post sends a responce back to display in either the browser or in the hyper command line.
  const height = parseFloat(req.body.height);
  const weight = parseFloat(req.body.weight);
  const bmiFormula = Math.round(weight / Math.pow(height, 2));
  res.send("Your BMI is " + bmiFormula + " .")

  // const first = Number(req.body.num1); // turns whatever is in the parenthesis into a number type.
  // const second = Number(req.body.num2);
  // const additionResult = first + second;
  // res.send("The result of addition is " + additionResult)

})


//port listener
app.listen(3000, function() {

    console.log("Yes we are up and running in the back end, that sounds well...")

})
