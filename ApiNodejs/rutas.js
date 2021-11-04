const router = require('express').Router();
const conexion = require('./config/conexion');
//agregar rutas----------
//get usuarios con contra y pass
router.post('/getUsuariosLogin',(req, res)=>{
    const {correo, contra} = req.body 
    let sql = `select * from usuarios where correo = '${correo}' and contra = '${contra}';`   
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json(rows[0]);
        }
    })
});
//agregar usuarios
router.post('/addUsuario',(req, res)=>{
    const {nombreUsuario, telefono, correo, cargo, contra} = req.body
    let sql = `insert into usuarios(nombreUsuario, telefono, correo, cargo, contra) 
                values('${nombreUsuario}','${telefono}','${correo}','${cargo}','${contra}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json({status: 'usuario agregado'});
        }
    })
});
//--------------------

module.exports = router;