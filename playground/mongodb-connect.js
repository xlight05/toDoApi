const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  db.collection('Todos').insertOne({
    text:"Something to do",
    completed: "false",
  },(err,result)=>{
    if (err){
      return console.log('Unable to insert data',err);
    }
    console.log(JSON.stringify(result,undefined,2));
  }
);

  db.collection('Users').insertOne({
    text:"A",
    age:15,
    location:"Piliyandala"
  },(err,result)=>{
    if (err){
      return console.log("Unable to insert data",err);
    }
    console.log(JSON.stringify(result,undefined,2));
  });

  db.close();
});
