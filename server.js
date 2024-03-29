const express = require('express')
const app = express()
const mongoose = require('mongoose')

var connectionString = 'mongodb://localhost:27017/whiteboard-cs4550-sp20';
if(process.env.MLAB_USERNAME_WEBDEV) {
   var username = process.env.MLAB_USERNAME_WEBDEV;
   var password = process.env.MLAB_PASSWORD_WEBDEV;
   connectionString = 'mongodb://' + username + ':' + password;
   connectionString += '@ds141704.mlab.com:41704/heroku_8hjljv0v';
}

mongoose.connect(connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true })

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./controllers/quiz.controller.server')(app)
require('./controllers/question.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)

app.listen(process.env.PORT || 3000)