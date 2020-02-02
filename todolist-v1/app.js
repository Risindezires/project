const express=require("express");
const bodyParser=require("body-parser");

const app=express();
let items=["Buy Food","Cook Food","Eat Food"];
let workItems=[];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res)
{
  let today=new Date();

 let options={   //ye vaala date ka format use karenge hum
   weekday:"long",
   day:"numeric",
   month:"long"
 };

  let day=today.toLocaleDateString("en-US",options);   //pre defined function hai jisme hum apne according date ka format assign kar sakte hain
  res.render("list",{listTitle:day,newListItems:items});
});
app.post("/",function(req,res)
{
  let item=req.body.newItem;

  if(req.body.list==="work"){  
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/"); //matlab ki home route pe bhej diya yaani ki app.get vaale code pe vahaan ise newListItem:item mil jaayega
  }
});
app.get("/work",function(req,res)
{
  res.render("list",{listTitle:"work list",newListItems:workItems});
});

app.listen(3000,function()
{
  console.log("Server started on port 3000");
});
