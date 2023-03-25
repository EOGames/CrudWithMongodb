const dbConnect = require('./mongodb.js');
const express = require('express');
const mongodb = require('mongodb');

const app = express();

// to reacive json object from postman
app.use(express.json());


app.get('/', async(req,res)=>
{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data);
});

app.post('/', async(req,res)=>
{
   // console.log(JSON.stringify(req.body));
   let data = await dbConnect();
   let result = await data.insertOne(req.body); 
   res.send(result);
});

app.put('/',async(req,resp)=>
{
    let data = await dbConnect();
    let result = await data.updateOne(
        {
            model: "Vivo V11"
        },
        {
            $set: req.body
        }
    );
    resp.send("Updated");
    console.log(result);
});

app.delete('/:id', async (req,resp)=>
{
    let data = await dbConnect();
    let result = await data.deleteOne({"_id": new mongodb.ObjectId(req.params.id)});
    console.log(result);
    resp.send(result);
});

app.listen(5001,()=>
{
    console.log("Server Running on Port 5001");
});