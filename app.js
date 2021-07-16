import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';

const app = express();
const port = 9000;
const dbAddress = "mongodb+srv://jny:0901@cluster0.y1rk5.mongodb.net/test";

app.set('port', process.env.PORT || port);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send("Hello World")
})

mongoose.connect(dbAddress, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(()=> console.log("MONGODB Connected"))
    .catch((err)=> console.log(err));


app.listen(port, ()=> console.log('Listening on port', port));


