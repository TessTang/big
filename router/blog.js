var express = require("express");
app = express();
var blog = express.Router();
var db = require('../db');



blog.get('/', function(req, res){
    var sql1 = "select * from article;"
    db.query(sql1, function(err, data){
        res.render('blog', {
            data: data
        });

    })
})

blog.get('/inside', function(req, res){
    res.send('HEllo inside');
})

module.exports = blog;
