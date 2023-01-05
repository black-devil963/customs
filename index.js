var express=require("express");
var cors=require("cors");
const Razorpay = require('razorpay');
var app=express();
app.use(cors());
const request = require('request');
var credentials = btoa("rzp_test_0a359K3M2JK1sI:40C2WbRdKCEy7sKLSqbKR3BE");
var amt=209;
const options = {
  url: 'https://api.razorpay.com/v1/orders',
  json: true,
  headers: {
      "Authorization": `Basic ${credentials}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json;'
    },
  body: {
    "amount": amt,
      "currency": "INR",
      "receipt": "receipt#1"
  }
}
 app.get("/",function (req,res){
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body); // Print the google web page.
    }
    else res.send(error+response.statusCode);
  })
});
app.listen(5050,() => console.log("Server is running"));

