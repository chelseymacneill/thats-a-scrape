// Dependencies 
const express = require("express");
const mongojs = require("mongojs");
// Used for scraping
const request = require("request");
const cheerio = require("cheerio");

// Initialize express 
const app = express()

// Mongo DB Database Configuration details
const databaseUrl = "scraper";
const collections = ['scrapedData'];

// Connect mongojs configuation to the db variable 
const db = mongojs(databaseUrl, collections);
db.on("error", function(error){
    console.log("Database Error:", error);
});

// Main route (simple Hello World Message)
app.get("/", function(req,res) {
res.send("Hello World");
});


// Listen on port 3000 
app.listen(3000, function(){
    console.log("App running on port 3000!")
})