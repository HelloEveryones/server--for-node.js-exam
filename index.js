const express= require('express')
const app=express();
const mongoose= require('mongoose');

const routes=require('./routes');
const handlebars=require('express-handlebars');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}))
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs')


app.use(routes);

mongoose.connect('mongodb://127.0.0.1/course-book');
mongoose.connection.on('connected', ()=>{
    console.log('DB is connected');
})

mongoose.connection.on('Error', (err)=>{
    console.log(err);
});

mongoose.connection.on('disconnected', ()=>{
    console.log('DB is disconnected');
})

app.listen(5000, ()=>console.log(`App is listening on http://localhost:5000`))