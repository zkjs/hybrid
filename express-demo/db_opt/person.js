/**
 * Created by lky-nb on 2016/6/11.
 */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    name : String,
    age: Number,
    birthday: Date
});

var model = mongoose.model('Person', PersonSchema);


module.exports = model;