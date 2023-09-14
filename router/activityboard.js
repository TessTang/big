var express = require("express");
app = express();
var activity = express.Router();
var db = require('../db');
var bp = require('body-parser');
var jp = bp.json();

activity.get('/', function(req, res){
    var sql1 = "select * from activityboard;"
    db.query(sql1, function(err, data){
        if(err){
            console.log('資料失敗');
            console.log(err);
        } else {
            console.log('資料抓成功');
            res.render('activityboard',{
                data: data
            });
        }
    })


})
activity.get('/inside/：id', function(req, res){
    var act_id = req.params.id;
    var sql1 = "select * from activityboard WHERE actid = ?;"
    db.query(sql1, act_id, function(err, act){
        if(err){
            console.log('活動失敗');
            console.log(err);
        } else {
            console.log('活動成功');
            res.render('activityboard_inside',{
                data: act_id
            });
        }
    })


})



module.exports = activity;