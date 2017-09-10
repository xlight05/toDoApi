var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Eat Dinner'
});

newTodo.save().then((result) => {
    console.log("Saved", result);
}, (err) => {
    console.log("Error", err);
})

var newTodo1 = new Todo({
    text: 'Fuck Dinner',
    completed: false,
    completedAt: 123
});

newTodo1.save().then((result) => {
    console.log("Saved", result);
}, (err) => {
    console.log("Error", err);
})