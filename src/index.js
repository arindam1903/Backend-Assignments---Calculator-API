const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/',(req,res)=>{
  res.send("Hello world!");
});

app.post('/add',(req,res)=>{
  let num1=(req.body.num1);
  let num2=req.body.num2;
  let result=parseFloat(num1)+parseFloat(num2);
  
  if (isNaN(num1)|| isNaN(num2)){
    res.send( {  
      status: "failure",
      message: "Invalid data types"  ,
      sum: undefined
    });
    return;
  } else if (num1>1000000 || num2>1000000 ||result>1000000){
     res.send({
       status: "error",
       message:"Overflow",
       sum: undefined
     });
     return;
  } else if (num1<-1000000 || num2<-1000000 ||result<-1000000){
    res.send({
      status: "error",
      message:"Underflow",
      sum: undefined
    });
    return;
  } else {
    res.send({
      status:"success",
      message: "the sum of given two numbers",
      sum: result
    });
  }
});

app.post('/sub',(req,res)=>{
  let num1=(req.body.num1);
  let num2=req.body.num2;
  let result=parseFloat(num1)-parseFloat(num2);

  if (isNaN(num1)|| isNaN(num2)){
    res.send( {  
      status: "failure",
      message: "Invalid data types"  ,
      difference: undefined
    });
    return;
  }

  else if (num1>1000000 || num2>1000000 ||result>1000000){
     res.send({
       status: "error",
       message:"Overflow",
       difference: undefined
     });
     return;
  }

  else if (num1<-1000000 || num2<-1000000 ||result<-1000000){
    res.send({
      status: "error",
      message:"Underflow",
      difference: undefined
    });
    return;
  }
  
  else {
    res.send({
      status:"success ",
      message: "the difference of given two numbers",
      difference: result
    });
  }



});

app.post('/multiply',(req,res)=>{
  let num1=(req.body.num1);
  let num2=req.body.num2;
  let product=(parseFloat(num1)*parseFloat(num2));
  if (isNaN(num1)|| isNaN(num2)){
    res.send( {  
      status: "failure",
      message: "Invalid data types"  ,
      result: undefined
    });
    return;
  } else if (num1>1000000 || num2>1000000 ){
     res.send({
       status: "error",
       message:"Overflow",
       result: undefined
     });
     return;
  } else if (num1<-1000000 || num2<-1000000 ){
    res.send({
      status: "error",
      message:"Underflow",
      result: undefined
    });
    return;
  } else {
    res.send({
      status:"success ",
      message: "The product of given numbers",
      result: product
    });
  }
});

app.post('/divide',(req,res)=>{
  let num1=(req.body.num1);
  let num2=req.body.num2;
  let division=(parseFloat(num1)/parseFloat(num2));
  if (isNaN(num1)|| isNaN(num2)){
    res.send( {  
      status: "failure",
      message: "Invalid data types"  ,
      result:undefined
    });
    return;
  } 
  else if ( parseFloat(num2)===0 ){
     res.send({
       status: "error",
       message:"Cannot divide by zero" ,
       result:undefined
     });
     return;
  } 
  else if (num1>1000000 || num2>1000000 ){
     res.send({
       status: "error",
       message:"Overflow" ,
       result:undefined
     });
     return;
  } else if (num1<-1000000 || num2<-1000000 ){
    res.send({
      status: "error",
      message:"Underflow",
      result:undefined
    });
    return;
  } else {
    res.send({
      status:"success ",
      message: "The division of given numbers",
      result: division
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
