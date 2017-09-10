var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var newTodo = new Todo({
    text: 'Eat Dinner'
});

newTodo.save().then((result) => {
    console.log("Saved", result);
}, (err) => {
    console.log("Error", err);
})
