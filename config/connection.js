const { MongoClient } = require('mongodb')

const databaseUrl = 'mongodb://localhost:27017'
const client = new MongoClient(databaseUrl, { useNewUrlParser: true })

let database

async function run(){
    try{
        await client.connect()
        const db = await client.db('db_pasarnow')
        database = db
        return database
    }catch(err){
        console.log(err)
    }
}

function getDatabase(){
    return database
}

module.exports = { run, getDatabase }