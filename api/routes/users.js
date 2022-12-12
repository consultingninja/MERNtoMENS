var express = require('express');
var router = express.Router();

const dbConn = require('../dbConn');

const baseUsers = [{firstName: 'John',lastName: 'Smith',email:'jsmith@gmail.com',id:1},
{firstName: 'Sara',lastName: 'Connor',email:'connors3899@gmail.com',id:2},
{firstName: 'Jim',lastName: 'Dean',email:'breakfastmeat@gmail.com',id:3},
{firstName: 'Angelina',lastName: 'Jolie',email:'lotsakids@gmail.com',id:4},
];

const getAllUsers = async(collection)=>{
 const allUsers = await collection.find({}).toArray();
 return allUsers
}

const initializeUsers = async (collection)=>{
  const initializeUsers = await collection.insertMany(baseUsers);
  console.log('** Inserted users =>', initializeUsers);
  return
}

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let checkUsers = await getAllUsers(dbConn.collection);
  if(!checkUsers || checkUsers.length === 0){
  await initializeUsers(dbConn.collection)
  checkUsers = await getAllUsers(dbConn.collection);
  }
  console.log('** Retrieved users =>', checkUsers);
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.json(checkUsers);

});


module.exports = router;
