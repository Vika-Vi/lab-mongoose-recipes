const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data.json");
//console.log("this is what im printing ", data);
//console.log("this is it", Recipe);
const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';
const recipe1 = {
  title: "Asian Glazed Chicken Thighs",
  level: "Amateur Chef",
  ingredients: [
    "1/2 cup rice vinegar",
    "5 tablespoons honey",
    "1/3 cup soy sauce (such as Silver Swan®)",
    "1/4 cup Asian (toasted) sesame oil",
    "3 tablespoons Asian chili garlic sauce",
    "3 tablespoons minced garlic",
    "salt to taste",
    "8 skinless, boneless chicken thighs",
  ],
  cuisine: "Asian",
  dishType: "main_course",
  image: "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
  duration: 40,
  creator: "Chef LePapu",
};

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
//Iteration 2
    Recipe.create(recipe1)
    .then(recipe => console.log('The recipe is : ',recipe))
    .catch(error => console.log('An error happened while saving a new recipe:', error));
    //ITERATION 3
   // Recipe.insertMany(data)
    //  .then(function () {
    //    data.forEach((object) => console.log(object.title));
    //  })
   //   .catch((error) => {
    //    console.error("No title updated", error);
   //   });
 })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
