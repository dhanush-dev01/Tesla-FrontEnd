const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { json } = require("express");
const config = require("./config.json");

let app = express();

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let port = process.env.PORT || config.port;


let Bookingform = mongoose.model(
  "Bookingform",
  Schema({
    model: String,
    city: String,
    branch: String,
    date: String,
    title: String,
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    email: String,
  })
);

mongoose
  .connect(
    `mongodb+srv://${config.dbuser}:${config.password}@cluster0.x4x3eny.mongodb.net/${config.dbname}?retryWrites=true&w=majority`
  )
  .then(function () {
    console.log("Db Connected");
  })
  .catch((error) => {
    console.log("Error ", error);
  });

// app.use(express.static(__dirname+"/public"));
app.use(express.json()).use(cors());



app.post("/savedetails",(req,res)=>{  //setting a post route
    let a = req.body
    let detail = new Bookingform({
    model: a.model,
    city: a.city,
    branch: a.branch,
    date: a.date,
    title: a.title,
    firstName: a.firstName,
    lastName: a.lastName,
    phoneNumber: a.phoneNumber,
    email: a.email,
    })
    // console.log(detail);
    detail.save().then((db)=>{
        res.send("updated")
    })
})

app.listen(port);
console.log(`Server is now live on : ${port}`);
