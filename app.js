const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");
var items = [];
let workItem = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  let day = date();
  res.render("list", {
     listTittle: day,
    newlistitem: items
  });

});

app.post("/", function(req, res) {
  item = req.body.newItem;
  if (req.body.list === "Work") {
    workItem.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
})

app.get("/work", function(req, res) {
  res.render("list", {
    listTittle: "Work List",
    newlistitem: workItem
  });
})
app.post("/work", function(req, res) {
  let item = req.body.workIteml;
  workItem.push(item);
  res.redirect("/work");
})
app.listen(3000, function() {
  console.log("Live server is set up at port 3000");
});
