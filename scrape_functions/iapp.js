// Parses our HTML and helps us find elements
var cheerio = require("cheerio");
// Makes HTTP request for HTML page
var axios = require("axios");


function iappScrape() {
  
  // First, tell the console what server.js is doing
  console.log("\n***********************************\n" +
  "Grabbing every thread name and link\n" +
  "from reddit's webdev board:" +
  "\n***********************************\n");
  
  // Making a request via axios for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
  axios.get("https://www.facebook.com/").then(function(response) {
  
  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(response.data);
  
  // An empty array to save the data that we'll scrape
  var results = [];
  let something = $.html()
  //let main2 = $("#resource-search-global").html();
  //let vanilla = document.querySelector("#resource-search-global").innerHTML
  console.log(something);
  
  
  // (i: iterator. element: the current element)
  $("#toolbarContainer").each(function(i, element) {
    
    // Exploring the html 
    let main = $(this).children()
    
    // In the currently selected element, look at its child elements (i.e., its a-tags),
    // then save the values for any "href" attributes that the child elements may have
    // var link = $(element).children().attr(".summary");
    
    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      main
    });
  });
  
  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
});

};

iappScrape();

