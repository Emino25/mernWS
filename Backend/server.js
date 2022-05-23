// import express
const express = require("express");
// association methds express l varb
const app = express();
//imort dotenv
require("dotenv").config();
// creation port
const port = process.env.port || 5000;
console.log(port);
/**
 * connection BD
 */
const connectDB = require("./config/connectDB");
connectDB();
/**
 * pars the body using passport
 */
// install passeport
// const passport = require("passport");
// app.use(passport.initialize());
/**
 * pars the body using middeleware express.json()
 */
app.use(express.json());
/**
 * the routes
 */
app.use("/product", require("./Routes/productRoutes"));

// server lisning
app.listen(port, (err) =>
  err ? console.error(err) : console.log(`server is listinig on ${port}`)
);
