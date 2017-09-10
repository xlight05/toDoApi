const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // db.collection('Todos').deleteMany({text:"Something to do"}).then((result)=>{
  //     console.log (result);
  // },(err)=>{
  //     console.log ("Error",err);
  // });
// db.collection('Todos').deleteOne({text:"eat"}).then ((result)=>{
//   console.log(result);
// },(err)=>{
//   console.log(err);
// });

db.collection('Todos').findOneAndDelete({text:"Something to do"}).then ((result)=>{
  console.log(result);
})
  db.close();
});
