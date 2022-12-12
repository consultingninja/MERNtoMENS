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