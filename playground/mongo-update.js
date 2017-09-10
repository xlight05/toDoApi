const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

db.collection('Todos').findOneAndUpdate({
    _id:new ObjectID ("59b513860ad5661c84bcdf8d")
},{
    $set:{
        completed : true
    }
},{
    returnNewDocument:true
}).then((result)=>{
  console.log(result);
});

  db.close();
});
