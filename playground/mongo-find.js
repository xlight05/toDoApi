const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
  db.collection('Todos').find().toArray().then((docs)=>{
      console.log (JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log("Error",err);
  });

  db.collection('Todos').find({text:"eat"}).toArray().then((docs)=>{
      console.log (JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log("Error",err);
  });


  db.close();
});
