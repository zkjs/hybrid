/**
 * Created by lky-nb on 2016/6/12.
 */

var async = require('async');
// import the rest of the normal stuff
//var mongoose = require('mongoose');

require('./gestureLogDetail.js')();

var gestureLogDetail = db.model('gestureLogDetail');


exports.query_gesture = function (callback) {
    // mongoose.connect("mongodb://localhost:27017/test", function (err) {
    //     if (err) throw err;
    //
    //
    //     var query = gestureLogDetail.find({});
    //
    //     // this allows you to continue applying modifiers to it
    //     query.sort('-create');
    //     query.limit(10);
    //     // finally, when ready to execute the query, call the exec() function
    //     query.exec(function(err, results) {
    //         if (err) throw err;
    //
    //         console.log(results);
    //         callback(err,results);
    //
    //   //      cleanup();
    //     });
    //
    //
    // });

    var query = gestureLogDetail.find({});

    // this allows you to continue applying modifiers to it
    query.sort('-create');
    query.limit(10);
    // finally, when ready to execute the query, call the exec() function
    query.exec(function(err, results) {
        if (err) throw err;

        console.log(results);
        callback(err,results);

        //      cleanup();
    });
}



function cleanup() {
    mongoose.disconnect();
}