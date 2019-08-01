// Parses our HTML and helps us find elements
var cheerio = require("cheerio");
// Makes HTTP request for HTML page
var axios = require("axios");


function independentScrape() {
    
    // First, tell the console what server.js is doing
    console.log("\n***********************************\n" +
    "Grabbing every thread name and link\n" +
    "from reddit's webdev board:" +
    "\n***********************************\n");
    
    // Making a request via axios for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
    axios.get("https://www.independent.co.uk/topic/Privacy").then(function(response) {
    
    // Load the HTML into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(response.data);
    
    // An empty array to save the data that we'll scrape
    var results = [];
    
    
    // (i: iterator. element: the current element)
    $(".content").each(function(i, element) {
        
        // Save the headline to the story
        var main = $(this).children().attr()

        // Link to the articles
        
        // In the currently selected element, look at its child elements (i.e., its a-tags),
        // then save the values for any "href" attributes that the child elements may have
        // var link = $(element).children().attr(".summary");
        
        // Save these results in an object that we'll push into the results array we defined earlier
        results.push({
            main: main
        });
    });
    
    // Log the results once you've looped through each of the elements found with cheerio
    console.log(results);
});

};

independentScrape();