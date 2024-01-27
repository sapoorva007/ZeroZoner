const express = require('express');
const bodyParser= require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');
const uri ='mongodb://localhost:27017/zerozoner';
const client= new MongoClient(uri);

client.connect().then(()=>{ 
    console.log("connection established");
 });

 let _db=client.db();
 let _userCollectionName="user";
   let details=_db.collection(_userCollectionName);
 details.insertMany([
    {
        name:'apoorva',
        phone:9968905423,
        role:'Freelancer',
        email:"sriharikotaapoorva@gmail.com",
   },
   {

       name:'jyothi',
        phone:9956343573,
        role:'suppoter',
        email:"katarijyothi@gmail.com",
   },
    {   
        name:'sunitha',
        phone:9967543631,
        role:'tester',
        email:"kolamgarisunitha@gmail.com"
    }  
    ]).then(()=>{
        console.log("Instered")
    });

//deleting one record

    let id=new ObjectId("65b3543029383bf00682a9a1");
    details.deleteOne({_id:id}).then(()=>{
      console.log("deleted");
}).catch(error=>{
    console.log(error);
 });

 //projects details

 let project = "projects";
 let detail=_db.collection(project);
 detail.insertMany([                              //inserting many records
    {
       name:'Dryfruits',
       description:'dryfruits good for health',
       file_concept:'concept1',

    },
    {
        name:'zerozoner', 
        description:'one word that can turn dreams into reality',
        file_concept:'concept2'
 
     },
     {
        name:'gullystore',
        description:'common people store',
        file_concept:'concept3',
 
     }
    ]).then(()=>{
        console.log("Instered")
    });

     //deleting one record from project collection 

     let Id=new ObjectId("65b48f271be916b03820cdbc");
     detail.deleteOne({_id:Id}).then(()=>{
        console.log("Project deleted");
    });
    
    //inserting userwallets in database

    let _userWallets="userWallets";
    let walletsCollection=_db.collection(_userWallets);
    walletsCollection.insertMany([
        {
            Account_No:7567681368358,
            Bank_Name:"SBI",
            IFSC:"SBI0099465",
            Balance:5000,
        },
        {
            Account_No:7567681368342,
            Bank_Name:"UNION",
            IFSC:"UNI009875477",
            Balance:9000,
        },
        {
            Account_No:756768136834545,
            Bank_Name:"CANARA",
            IFSC:"CNRB000732",
            Balance:9000,
        }
    ]).then(()=>{
        console.log("Userwallets Inserted");
    });

    //deleting one  record from userWallets colletOne
    let ID=new ObjectId("65b492a17359047c0b07fb4d");
    walletsCollection.deleteOne({_id:ID}).then(()=>{
        console.log("UserWallets deleted");
    });

    //inserting transactions in database

    let user_Transactions="Transactions";
    let userTransactions=_db.collection(user_Transactions);
    userTransactions.insertMany([
        {
            Transaction_id:8972792841921,
            paymentMode:"paytm",
            Amount:5000,
            purpose:"Credit"
        },
        {
            Transaction_id:8972792841921,
            paymentMode:"Cash",
            Amount:4000,
            purpose:"Debit"
        },
        {
            Transaction_id:8972792841921,
            paymentMode:"Phone pay",
            Amount:3000,
            purpose:"Credit"
        }
    ]).then(()=>{
        console.log("Transaction inserted");
    });

     //deleting one record from transaction collection 
     let tr_id=new ObjectId("65b4942f797a00d06b038510");
     userTransactions.deleteMany({_id:tr_id}).then(()=>{
        console.log("Project deleted");
    });

const app=express();
app.use(bodyParser.json());
app.listen(3000,()=>{
    console.log("server running on 3000");
});