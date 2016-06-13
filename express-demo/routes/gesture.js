/**
 * Created by lky-nb on 2016/6/12.
 */


var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/get', function(req, res, next) {

    var dbopt_query = require("../db_opt/gesture_opt.js");

    dbopt_query.query_gesture(function (err, result) {
        res.send(result);
    });
    
});



module.exports = router;
