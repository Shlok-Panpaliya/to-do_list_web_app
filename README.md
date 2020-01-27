# To-DoList-WebApp
## Tools and Technologies

* Node.js
* Express.js
* EJS
* MongoDb
* Mongoose
* CSS

### npm init
* express
* mongoose
* lodash
* ejs
* body parser

## About
This is a Express app running on MongoDB database. The style.css can be found in the public folder. 
All the .ejs files and footer and header can be found in the view folder.

The app can be run on localhost:3000

The form with post method takes input from user. The post route aquires the data usning the body-parser and saves the data
to the MOngoDB database locally using item.save() method.The route is redirected to home route after saving data.

findByIdAndDelete() method is used to delete the checkmarked data from the MongoDB database. The route then redirects to home route

InsertMany() method is used to insert the list of String of blogs on to the MongoDB database.
