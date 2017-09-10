var express = require('express');
var bodyParser = require('body-parser');

var {
    mongoose
} = require('./db/mongoose');
var {
    Todo
} = require('./models/todo');
var {
    User
} = require('./models/user');

var app = express();
app.use (bodyParser.json());

app.post('/todos', (req, res) => {
    var newTodo = new Todo({
        text: req.body.text
    });


    newTodo.save().then((result) => {
        res.send(result);
    }, (err) => {
        res.send(err);
    })


});
app.listen(3000, () => {
    console.log('Started on port 3000');
});