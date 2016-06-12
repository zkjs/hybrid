/**
 * Created by lky-nb on 2016/6/11.
 */


// import async to make control flow simplier
var async = require('async');
var mongoose = require("mongoose");

require('./person.js')();

var Person = mongoose.model('Person');

// define some dummy data
var data = [
    {
        name: 'bill',
        age: 25,
        birthday: new Date().setFullYear((new Date().getFullYear() - 25))
    },
    {
        name: 'mary',
        age: 30,
        birthday: new Date().setFullYear((new Date().getFullYear() - 30))
    },
    {
        name: 'bob',
        age: 21,
        birthday: new Date().setFullYear((new Date().getFullYear() - 21))
    },
    {
        name: 'lilly',
        age: 26,
        birthday: new Date().setFullYear((new Date().getFullYear() - 26))
    },
    {
        name: 'alucard',
        age: 1000,
        birthday: new Date().setFullYear((new Date().getFullYear() - 1000))
    }
];

function insert() {

    mongoose.connect("mongodb://localhost:27017/test", function (err) {
        if (err) throw err;

        async.each(data, function (item, cb) {
                Person.create(item, cb);
            }, function (err) {
                if (err) throw err;
                mongoose.disconnect();
            }
        );

    });
}

exports.insert_person = function () {
    insert();
}