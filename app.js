const { json } = require('express');
const express = require('express');
const app = express();

//se crea las vistas
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(json));

// se crea el puerto para mostrar la aplicacion
app.listen(5000, ()=>{
    console.log('server corriendo en http://localhost:5000');
});



app.use('/', require('./router'));









