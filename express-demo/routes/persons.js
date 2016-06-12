/**
 * Created by lky-nb on 2016/6/11.
 */

var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/add', function(req, res, next) {

    var dbopt_add = require("../db_opt/insert_person.js");

    dbopt_add.insert_person();
    res.send('add person success');
});

router.get('/query', function(req, res, next) {
    var dbopt_query = require("../db_opt/query_person.js");

    dbopt_query.query_person(function (err, result) {
        res.send(result);
    });


});

module.exports = router;
