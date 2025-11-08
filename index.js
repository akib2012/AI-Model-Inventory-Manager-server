const express = require('express');
const app = express()
require('dotenv').config()
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const port = 3000

app.get('/', (req, res) => {
  res.send('ai inventor project server sunning ')
})

//  middle wire here

app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.exfto5h.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
   
    await client.connect();

    // clreate collections here
    const db = client.db('ai_model_inventory_manager');
    const modelscollections = db.collection('models');


    app.get('/models', async(req,res) => {
        const cursor = modelscollections.find();
        const  result  = await cursor.toArray();
        res.send(result);
    })








    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}
run().catch(console.dir);







// mongo user: ai_model_inventory_manager
//  mongo pass: AAir8C8na2P1uNm1


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
