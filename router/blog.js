var express = require("express");
app = express();
var blog = express.Router();
var db = require('../db');



blog.get('/page/:page([0-9]+)', function(req, res){
    var myPage = req.params.page;
    if (myPage <= 0) {
        res.redirect('/page/1');
    }
    var eachPage = 6;
    var offset = (myPage -1) * eachPage;

    db.query(`SELECT * FROM article LIMIT ${offset}, ${eachPage}`,
    function(err,rows){
    if (err) {
        console.log('喬巴:分頁sql執行錯誤====')
        console.log(err)
    }else{
        console.log('喬巴:分頁sql執行ok====')
        console.log(rows)
    }

   db.query(`SELECT count(*) as zoo FROM article`, function(err, totalRecord){
    if (err) {
        console.log('有錯')
        console.log(err)
    }else{
        console.log('我正在看總筆數')
        console.log(totalRecord[0].zoo);

        var last_page = Math.ceil(totalRecord[0].zoo / eachPage);
        if(myPage> last_page){
            res.redirect(`/page/${last_page}`);
        }

        res.render('blog',{
            data: rows,
            curr_page: myPage,
            next_page: `${parseInt(myPage)+1}`,
            total_nums: totalRecord[0].zoo,
            last_page: last_page
        })
    }
   })
});


// blog.get("/", function(req, res){
//     var sql1 = "select * from article;"

//     db.query(sql1, function(err, data){
//         res.render('blog', {
//             data: data
//         });
//     })
})

blog.get('/tags', function(req, res){
    var sql1 = "select * from tag;"
    db.query(sql1, function(err, tags){
        if(err){
            console.log('資料沒抓成功');
            console.log(err);
        } else {
            console.log('資料抓成功');
            res.json(tags);

        }
    })
})



blog.get('/inside/:id', function(req, res){
    var art_id = req.params.id;
    var sql2 = "select * from article where atcid = ?;"
    var data = [req.params.id];
    db.query(sql2, data, function(err, art){
        if(err){
            console.log('抓文章失敗');
            console.log(err);
        } else {
            console.log(art);
            res.render('blog_inside',{
                data: art
            })
        }
    })
    // console.log(art_id);
    // res.render('blog_inside');
})

module.exports = blog;
