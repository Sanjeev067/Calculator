 
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended:true }));

app.get("/index",function(request,response){
    response.sendFile( __dirname + "/index.html");
});

app.post("/index", function(request,response){

    var num1 = Number(request.body.n1);
    var num2 = Number(request.body.n2);

    var result = num1 + num2;

    response.send("the result of the calculation is " + result );
});

app.get("/bmicalculator", function(request,response){
    response.sendFile(__dirname + "/bmicalculator.html")
});
app.post("/bmicalculator", function(request,response){

    var Weight = parseFloat(request.body.Weight);
    var Height = parseFloat(request.body.Height);

    var bmi = Weight / (Height * Height );

    response.send(" the bmi is " + bmi);
})

app.listen(3000,function(){
    console.log("server started on port 3000");
});