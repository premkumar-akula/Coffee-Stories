const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Item = require("./models/item.js")
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {itemSchema} = require("./schema.js")

const MONGO_URL = "mongodb://127.0.0.1:27017/coffeestories"

main()
    .then(()=>{
        console.log("connected to db");
    })
    .catch(err =>{
         console.log(err)
    });

async function main() {
  await mongoose.connect(MONGO_URL);
}
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>{
    res.send("Hi,I am coffee");
})
const validateItem = (req,res,next) =>{
    let {error} = itemSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}
//Index Route 
app.get("/items",async (req,res) =>{
    const allitems = await Item.find({});
    res.render("\items/index.ejs",{allitems});
})
//New Route
app.get("/items/new",(req,res)=>{
    res.render("items/new.ejs");
})
//Show Route
app.get("/items/:id",wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const item = await Item.findById(id);
    res.render("\items/show.ejs", {item})
    })
);

//Create Route
app.post("/items",validateItem,
    wrapAsync(async (req,res,next)=>{
    let result = itemSchema.validate(req.body);
    console.log(result);
    if(result.error){
        throw new ExpressError(400,result.error);
    }
    const newItem = new Item(req.body.item);
    await newItem.save();
    res.redirect("/items");
    })
);

//Edit Route
app.get("/items/:id/edit", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const item = await Item.findById(id);
    res.render("items/edit.ejs", {item})
    })
);

//Update Route
app.put("/items/:id",validateItem,
     wrapAsync(async (req,res)=>{
    let {id} = req.params;
    await Item.findByIdAndUpdate(id,{...req.body.item});
    res.redirect(`/items/${id}`);
    })
);

//Delete Route
app.delete("/items/:id", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let deletedItem = await Item.findByIdAndDelete(id);
    console.log(deletedItem);
    res.redirect("/items");
    })
);


/*
app.get("/testitem",async (req,res)=>{
    let sampleItem = new Item({
        title : "Sandwich",
        description:  "A sandwich is a dish",
        image: {
            filename: "ham_sandwich.jpg",
            url: "https://unsplash.com/photos/ham-sandwich-on-white-surface-Gg5-K-mJwuQ",
        },
        price: 120,
    });
    await sampleItem.save();
    console.log("sample was saved");
    res.send("Successful testing");
})*/

app.all("*",(req,res,next) => {
    next(new ExpressError(404,"Page Not Found!"));

});

app.use((err,req,res,next)=>{
    let {statusCode = 500, message = "Something went wrong!"} = err;
    res.status(statusCode).render("error.ejs",{message});
    //res.status(statusCode).send(message)
});
app.listen(8080,()=>{
    console.log("server is listening to port 8080");
})
