let express = require('express');
let app = express();
let blog = require('./router/blog.js');
let activityboard = require('./router/activityboard.js');
app.use('/blog/page',express.static('lib'));
app.use('/blog/inside',express.static('lib'));
app.use('/blog/tag',express.static('lib'));
app.use('/blog/catelogy',express.static('lib'));
app.use('/activityboard',express.static('lib'));
app.use('/activityboard/inside',express.static('lib'));
app.set('view engine', 'ejs');
app.use('/blog', blog);
app.use('/activityboard', activityboard);
app.listen(2410);

console.log('啟動');