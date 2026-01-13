import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(express.json()); //form data read karne ke liye
app.use(cors());  // frontend se backend access ke liye

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "blood_donation_db"
}); 
 // connect database
 db.connect((err) =>{
    if(err){
    console.log("Database Connection Failed!")
    return; // it stops the program
 }
  console.log("MySql Connected");
})
app.post("/add-donor",(req,res)=>{
    const{name , age , city ,contact , email, blood_group } = req.body;

    const sql = `INSERT INTO donors (name,age,city,contact,email,blood_group)
    VALUES (?,?,?,?,?,?);`

    db.query(sql, [name,age,city,contact,email,blood_group], (err,result) =>{
    if(err){
        console.log(err);
        res.json({ success : false , message : "Failed to add donor"});
        return;
    }
     res.json({ success : true , message : "Donor added successfully"}); 
 });
  });
  app.get("/search-donor",(req,res)=>{
    const {blood_group,city} = req.query;

    const sql = `SELECT * FROM donors
WHERE blood_group = ?
AND LOWER(city) = LOWER(?)
`;

    db.query(sql,[blood_group,city] ,(err,result) =>{
        if(err){
            console.log(err);
            res.json( {success : false ,message:"Search Failed"} );
            return;
        }
        res.json({ success : true , donors : result});
    })
  })
app.listen(5000 , () => {
    console.log("Server is Running");
})