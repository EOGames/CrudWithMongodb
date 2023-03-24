const dbConnect = require('./mongodb.js');

async function Update()
{
    let db = await dbConnect();
    let result = await db.updateOne(
        
            {
                model: 'M5'
            },
            {
                $set:
                {

                    model: 'M1',
                    price: 400
                }
            }
        
    )
    console.log(result);
}

Update();