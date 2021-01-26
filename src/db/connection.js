const mongoose = require("mongoose");
require("dotenv").config();




const connection = async () => {
    // const URI = "mongodb+srv://rachael:liloprevou12@cluster0.wdjk7.mongodb.net/tester?retryWrites=true&w=majority"
try {
    
await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});
console.log("connection made!");
} catch (error) {
    console.log(error)
}

};
connection();