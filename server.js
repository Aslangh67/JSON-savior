let express = require("express");
let path = require("path");
const fs=require("fs")
const util=require("util")

let app = express();
let currentId = 1;
//In order to make sure your server works on local & heroku you have to make sure the commandline looks like this
//process.env.PORT=heroku's port or local port
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"))

let savedData=[]
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
})
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
})
app.get("/api/notes", function (req, res) {
  return res.json(savedData);
});

app.post("/api/notes", function (req, res) {
  
var newNote=req.body;
newNote.id=currentId
currentId++;

savedData.push(newNote)
res.json(true)
  

});
app.delete("/api/notes/:id", function (req, res) {
  
  // delete savedData[savedData.indexOf(req.params.id)]
  
  var removeIndex = savedData.map(function(item) { return item.id; }).indexOf(parseInt( req.params.id));

// remove object
savedData.splice(removeIndex, 1);
    
  
  // console.log(found);
  
// console.log(req.params.id)

res.json(req.params.id)
  

});



app.listen(PORT, function () {
  console.log("listenin on port" + PORT);
})
