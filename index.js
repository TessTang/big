let express = require('express');
let app = express();
let blog = require('./router/blog.js')
app.use(express.static('lib'))
app.set('view engine', 'ejs')
app.use('/blog', blog)
app.listen(2410)

console.log('啟動')