const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title: {
        type : String,
        required: true,
    },
    description: String,
    /*image: {
        type: String,
        default:
            "https://unsplash.com/photos/ham-sandwich-on-white-surface-Gg5-K-mJwuQ"
            ,
       set: (v) => v === ""? "https://unsplash.com/photos/ham-sandwich-on-white-surface-Gg5-K-mJwuQ" : v,
    },
    image: {
        type: {
          filename: { type: String, required: true },
          url: { type: String, required: true },
        },
    },*/
    image: {
        filename: { type: String, },
        url: { type: String,},
    
    },
    price: Number,
    
})
const Item = mongoose.model("Item",itemSchema);
module.exports = Item;