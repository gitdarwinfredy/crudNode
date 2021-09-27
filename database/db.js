const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crudDB'

});


conexion.connect((error)=>{
    if(error){
     console.error('Se esta presentando el erro'+error);
     return
    }
    console.log('Conectado a la base de datos muy feliz');
})

module.exports = conexion;
