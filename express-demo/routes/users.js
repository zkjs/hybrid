var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/info', function(req, res, next) {
 
  // var Cat = mongoose.model('Cat', {
  //   name: String,
  //   friends: [String],
  //   age: Number,
  // });
  // var kitty = new Cat({name:'dzy', friends:['tom', 'jerry'], age:3});
  // kitty.save(function (err) {
  //   if(err)
  //       console.log("error");
  // });
  var dbopt = require("../db_opt/query_person");
  dbopt.insert();

  res.send('from lky');
});

module.exports = router;
