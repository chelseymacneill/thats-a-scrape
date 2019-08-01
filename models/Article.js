let mongoose = require("mongoose");

// Save a reference to the article schema constructor
let Schema = mongoose.Schema; 

// Using the Schema constructor to create nee Article Schema objects
let ArticleSchema = new Schema({
// Each Object we want to store will have a headline 
headline: {
    type: String,
    required: true
},
// Each object will also have a link 
link: {
    type: String,
    required: true
},
// The notes that people can leave will also be stored in this object
note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
}
});

// This creates our model from the above schema, using the mongoose model method
let Article = mongoose.model("Article", ArticleSchema);

// Export the Article model for use in other files
module.exports = Article;