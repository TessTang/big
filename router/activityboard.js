var express = require("express");
app = express();
var activity = express.Router();
var db = require('../db');
var bp = require('body-parser');
var jp = bp.json();

activity.get('/', function(req, res){
    var sql1 = "select * from tag;"
    db.query(sql1, function(err, data){
        if(err){
            console.log('資料沒抓成功');
            console.log(err);
        } else {
            console.log('資料抓成功');
            // console.log(tags);
            res.render('activityboard',{
                data: data
            });
        }
    })


})

module.exports = activity;