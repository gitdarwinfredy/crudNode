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

exports.update = (req, res)=>{
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('UPDATE users SET ? WHERE id=?', [{rol:rol, user:user}, id], (error,results)=>{
        if (error){
            console.log(error);
            }else{
                res.redirect('/');
            }
    })}

