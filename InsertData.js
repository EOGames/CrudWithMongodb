const dbConnect = require('./mongodb.js');

async function InsertData()
{
    let db = await dbConnect();
    let result = await db.insertOne(
        {
            model: 'Vivo V11',
            price: 25000,
            brand: 'Vivo'
        }
    )
    console.log(result);
}

//InsertData();

async function InsertManyData()
{
    let db = await dbConnect();
    let result = await db.insertMany(
            [
                {
                    model: 'M1',
                    price: 100,
                    brand: 'Noob'
                },                
                {
                    model: 'M2',
                    price: 200,
                    brand: 'Noob'
                },
                {
                    model: 'M3',
                    price: 300,
                    brand: 'Noob'
                }
            ]
        )
        console.log(result);
}
InsertManyData();