const dbConnect = require('./mongodb.js');

async function Delete()
{
    let db = await dbConnect();
    let result = await db.deleteOne(
        {
            model:'M3'
        }
    );
    console.log(result);
}
Delete();