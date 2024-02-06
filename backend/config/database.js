const mongoose = require("mongoose");
const bgRed = '\x1b[41m';
const resetColor = '\x1b[0m';
const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL).then((data)=>{
        console.log(`${bgRed}MongoDB connected with server${resetColor}`);
    }).catch((err)=>{console.log(err);})
}

module.exports = connectDatabase