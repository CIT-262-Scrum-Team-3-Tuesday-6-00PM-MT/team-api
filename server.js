const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/michael', (req,res) => {res.send("Hello Michael")});
app.get('/john', (req,res) => {res.send("Hello John")});
app.get('/cigi', (req,res) => {res.send("Hello Cigi")});
app.get('/tadeo', (req,res) => {res.send("Hello Tadeo")});
app.get('/miguel', (req,res) => {res.send("Hello Miguel!")});

app.listen(port, ()=>console.log("Listening"));