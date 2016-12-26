var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var todos=[{
  id:1,
  description:"Meet mom for lunch",
  completed: false,
},{
  id:2,
  description:"Go to Market",
  completed: false,
},{
  id:3,
  description:"Whack Amith on the head",
  completed:true,
},
];
app.get("/", function (req,res){
  res.send("Todo API root");
});

//GET /todos
app.get("/todos",function(req,res){
  res.json(todos);
})
// GET /todos/:id


app.listen(PORT,function(){
  console.log("Express listening on "+PORT+"!");
});
