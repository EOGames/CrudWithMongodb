const MongoClient = require('mongodb').MongoClient;

let databseName = 'ecom';
let collectionName = 'products';
const url = 'mongodb+srv://superuser:superuser@crud.a1359sv.mongodb.net/?retryWrites=true&w=majority'
let client = new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    let db = result.db(databseName);
    return db.collection(collectionName);
    
} module.exports = dbConnect;


// function NoobTest()
// {
//     return 'Noob';
// }

// module.exports = {
//     NoobTest:NoobTest,
//     dbConnect:dbConnect
// };