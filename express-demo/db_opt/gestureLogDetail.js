/**
 * Created by lky-nb on 2016/6/12.
 */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Any = new Schema({
   any:{}
});

var model = mongoose.model('gestureLogDetail', Any, "gestureLogDetail");


module.exports = model;