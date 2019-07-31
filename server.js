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

// Retreive all the data from scraped data collection (Note: This route will not hold any data until a route for scraping the data is set up and used)
app.get("/all", function (req,response){
    // Find everything in the collection
    db.scrapedData.find({}, function(err, found){
        if (err) {
            console.log(err);
        }
        else {
            response.json(found)
        }
    })
});

// Scrape the data from the site of our choosing 
app.get("/scrape", function(req, response){
    request("https://www.nytimes.com/topic/subject/privacy", function(error, response, html){
    var $ = cheerio.load(html);
    
    // Find each of the elements of the artifle within the html that we are interested in
    $(".stream").each(function(i, element){
         let headline = $(this).children.text()
         
        
        // if the title exists let me know that it was successfully saved
        if (headline) {
            db.scrapedData.save({
                headline: headline,
                link: link
            },
            function(error, saved) {
                if (error) {
                    console.log(error);
                }
                else{
                    console.log("Saved the data")
                }
            })
        }
    })
})
response.send("Scrape complete")
});

// Listen on port 3000 
app.listen(3000, function(){
    console.log("App running on port 3000!")
})