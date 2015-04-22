var mongodb = require('../models/mongodb');
var Schema = mongodb.mongoose.Schema;


var userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    remark:String
});



var  user  = mongodb.mongoose.model("users",userSchema);

module.exports=user;