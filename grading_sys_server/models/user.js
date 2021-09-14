const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
    firstName:  String,
    lastName:   String,
    middleName: String,
    userId:     String,  
    email:      String,
    role:       String,
    gradeLevel: String,
    section:    String,
    password:   String
});

module.exports = mongoose.model('users', UserSchema);