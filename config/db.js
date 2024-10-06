const mongoose = require('mongoose');

const Connectdb = async(req,res)=>{
    try{
        mongoose.connect('mongodb://localhost:27017/sample', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


    mongoose.connection.on('connected', () => {
        console.log('Connected to the database');
      });
      
      mongoose.connection.on('error', (err) => {
        console.log('Error connecting to the database:', err);
      });
      
      mongoose.connection.on('disconnected', () => {
        console.log('Database connection closed');
      });
    } catch(err){
        res.status(400).json('error',err.message);
    }
}
module.exports = Connectdb;