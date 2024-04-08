const express= require('express')
const app=express();

const routes=require('./routes')

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}))


app.use(routes)

app.listen(5000, ()=>console.log(`App is listening on http://localhost:5000`))