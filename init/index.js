
const mongoose = require('mongoose');
const initData = require("./data.js")
const Item = require("../models/item.js")

const MONGO_URL = "mongodb://127.0.0.1:27017/coffeestories";
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

const initDB = async()=> {
    await Item.deleteMany({});
    await Item.insertMany(initData.data);
    console.log("data was initialized");

}

initDB();