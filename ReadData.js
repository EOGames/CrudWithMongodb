const dbConnect = require('./mongodb');

async function GetData()
{
    let result = await dbConnect();
    result = await result.find().toArray();
    console.warn(result);
}
GetData();