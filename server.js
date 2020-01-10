let express = require("express");
let path = require("path");
const fs=require("fs")
const util=require("util")
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
let app = express();
let currentId = 1;
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"))
app.use(express.json());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
})
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
})

app.get("/api/notes", function (req, res) {
  
readFileAsync("./db/db.json", "utf8").then(function(data){
  console.log( "this",data);
let savedData=JSON.parse(data)
  return res.json(savedData);
  })
});

app.post("/api/notes", function (req, res) {
  readFileAsync("./db/db.json", "utf8").then(function(data){
    let savedData=JSON.parse(data)
    
  var newNote=req.body;
if (savedData.length>0){
  currentId=savedData[savedData.length-1].id+1
  newNote.id=currentId
  console.log(currentId);
  savedData.push(newNote)
  writeFileAsync("./db/db.json",JSON.stringify(savedData))
  res.json(true)
    }
  else{
    newNote.id=currentId
  console.log(currentId);
  savedData.push(newNote)
  writeFileAsync("./db/db.json",JSON.stringify(savedData))
    res.json(true)}})
  
});
app.delete("/api/notes/:id", function (req, res) {
  readFileAsync("./db/db.json", "utf8").then(function(data){
    let savedData=JSON.parse(data)
  var removeIndex = savedData.map(function(item) { return item.id; }).indexOf(parseInt( req.params.id));
savedData.splice(removeIndex, 1);
writeFileAsync("./db/db.json",JSON.stringify(savedData))
res.json(req.params.id)
})
});

app.listen(PORT, function () {
  console.log("listenin on port" + PORT);
})
