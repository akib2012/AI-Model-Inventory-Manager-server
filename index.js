const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('ai inventor project server sunning ')
})

const uri = "mongodb+srv://ai_model_inventory_manager:vGwTWRaoUGn5UGHe@cluster0.exfto5h.mongodb.net/?appName=Cluster0";

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
    




    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);







// mongo user: ai_model_inventory_manager
//  mongo pass: vGwTWRaoUGn5UGHe


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
