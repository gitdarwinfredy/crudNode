const conexion = require('../database/db');

exports.save = (req, res)=>{
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('INSERT INTO users SET ?',{user:user, rol:rol}, (error, results)=>{
        if(error){
            console.error('Temos el siguiente error para guardar en BD:' +error);
            return
        }else{
            res.redirect('/');
        }

           
        }
    )
}


