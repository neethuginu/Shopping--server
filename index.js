const express = require('express');
const dataService = require('./model/data.service');
const { Products } = require('./model/db');

const app = express();
app.use(express.json());

app.post('/create', (req, res) => {
    console.log(req.body);
    dataService.create( req.body.title, req.body.description,req.body.image)
        .then(result => {
          console.log(result)
        })
})

app.get('/products',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods :GET,POST,PATCH,PUT,DELETE,OPTIONS')
    Products.find()
    .then((products)=>{
        res.send(products)
    })
})

app.listen(4200,()=>{
    console.log("Server Start 4200")
})