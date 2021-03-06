const express =require('express');
const uri = "mongodb+srv://pratiksha:rBBM2fscP3UQnk4H@cluster0-8sqx5.mongodb.net/hospital?retryWrites=true&w=majority";
const app = express();
const port = 8800;
const mongoose = require('mongoose');
const cors=require('cors');
const bodyparser=require('body-parser')

app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

// mongoose connection estblished
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => console.log('Connected to MongoDB Successfully......'))
    .catch(err => console.log('Error occured while connecting MongoDB '+err));

console.log("connect");

// set path for router file
app.use('/', require('./routes/api/doctorlist'));
app.use('/', require('./routes/api/userRegister'));
app.use('/patient', require('./routes/api/disease'));
app.use('/register', require('./routes/api/userRegister'));
 
// listening port
app.listen(port, () => {
console.log("Port 8800 running on browser...");
});