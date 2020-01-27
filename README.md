# Node JS Todo Application
## Tools and Technologies
* Node.js
* Express.js
* EJS
* MongoDb
* Mongoose
* CSS

### npm init
* express
* lodash
* mongoose
* body-parser
* ejs

## About
This is a Express app running on MongoDB database. The style.css can be found in the public folder. All the .ejs files and footer and header can be found in the view folder folder in view.

The app can be run on localhost:3000

Form takes input from user with Post method. Post route saves the data using the MongoDB item.save() method and redirects to the home or "tittle" route.

Item.findByIdAndRemove() [https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/] is used to remove an item from the list which deletes the item if it matches with an id in the MongoDB database.

Item.find() method displays data from the MongoDB database stored locally.

Item.InsertMany() inserts the strings of blog in the MongoDB database. 
