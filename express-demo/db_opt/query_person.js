
// import async to make control flow simplier
var async = require('async');

// import the rest of the normal stuff
var mongoose = require('mongoose');

require('./person.js')();

var Person = mongoose.model('Person');


function query(callback) {

  mongoose.connect("mongodb://localhost:27017/test", function (err) {
    if (err) throw err;

    var query = Person.find({age: {$lt: 1000}});

    // this allows you to continue applying modifiers to it
    query.sort('birthday');
    query.select('name');
    // you can chain them together as well
    // a full list of methods can be found:
    // http://mongoosejs.com/docs/api.html#query-js
    query.where('age').gt(21);
    // finally, when ready to execute the query, call the exec() function
    query.exec(function(err, results) {
      if (err) throw err;

      console.log(results);
      callback(err,results);

       cleanup();
    });


  });
  


}

exports.query_person = function (callback) {
  return query(callback);
};



function cleanup() {
  mongoose.disconnect();
}
