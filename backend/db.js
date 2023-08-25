const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connectToMongo = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/inotebook?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.5")
    .then(()=>{
        console.log("databse connected successfully")
    })
    .catch(()=>{
        console.log("databse not connected");
    })
}

module.exports = connectToMongo;