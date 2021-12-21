const express = require('express')
require('dotenv').config()
const { MongoClient } = require('mongodb');
const cors=require('cors');


const ObjectId=require('mongodb').ObjectId;
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://easy-parcel:jOfoLniqK0iG9LrH@cluster0.pszjp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
  try {
    await client.connect();
    const database = client.db("easy-parcel-user");
    const userCollection = database.collection("food");
    console.log('connected');
   
  //get api
   app.get('/foods',async (req,res)=>
   {
     const cursor=userCollection.find ({})
     const users=await cursor.toArray();
     res.send(users);
   })
  
  //console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    //await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
//easy-parcel
//jOfoLniqK0iG9LrH