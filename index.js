const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const userrouter = require('./routes/Userroutes');
const Connectdb = require('./config/db');

app.use(cors());
app.use(express.json());

Connectdb();

app.use('/api/user',userrouter);

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log('server is running');
})
