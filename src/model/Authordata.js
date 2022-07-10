const mongoose = require('mongoose')//Accessing mongoose package
mongoose.connect('mongodb+srv://userone:userone@libraryapp.lswirdz.mongodb.net/casestudy?retryWrites=true&w=majority');//Database connection
const Schema = mongoose.Schema;//Schema definition

const AuthorSchema = new Schema({
    name: String,
    book: String,
    dob: String,
    image: String
 });
 
 var Authordata = mongoose.model('authordata',AuthorSchema);
 
 module.exports = Authordata;
 