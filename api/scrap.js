//dbConn
const { MongoClient } = require('mongodb');

const fireConnection =()=>{
    const url = 'mongodb://0.0.0.0:27017';
    const client = new MongoClient(url);
    const dbName = 'AllUsers';
    if(client)console.log('success')
    const db = client.db(dbName);
    const collection = db.collection('users');
    if(db && collection)console.log("successful db + collection connect")

    return{
        DB:db,
        Coll: collection
    }
}

const {DB,Coll} = fireConnection();


module.exports={
    db: DB,
    collection: Coll
}

//users

var express = require('express');
var router = express.Router();

const dbConn = require('../dbConn');

const baseUsers = [{firstName: 'John',lastName: 'Smith',email:'jsmith@gmail.com',id:1},
{firstName: 'Sara',lastName: 'Connor',email:'connors3899@gmail.com',id:2},
{firstName: 'Jim',lastName: 'Dean',email:'breakfastmeat@gmail.com',id:3},
{firstName: 'Angelina',lastName: 'Jolie',email:'lotsakids@gmail.com',id:4},
];

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let checkUsers = await dbConn.collection.find({}).toArray();
  if(!checkUsers || checkUsers.length === 0){
  const initializeUsers = await dbConn.collection.insertMany(baseUsers);
  console.log('** Inserted users =>', initializeUsers);
  checkUsers = await dbConn.collection.find({}).toArray();
  }
  console.log('** Retrieved users =>', checkUsers);
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.json(checkUsers);

});


module.exports = router;