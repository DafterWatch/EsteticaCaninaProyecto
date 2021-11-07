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
//agregar mascotas
router.post('/addMascota',(req, res)=>{
    const {nombreMascota, edad, sexo, raza, especie, idDueno} = req.body
    let sql = `insert into mascotas (nombreMascota, edad, sexo, raza, especie, idDueno)
                values('${nombreMascota}','${edad}','${sexo}','${raza}','${especie}','${idDueno}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json({status: 'mascota agregada'});
        }
    })
});
//get mascotas
router.get('/getMascotas/:id',(req, res)=>{
    const {id} = req.params
    let sql = 'select * from mascotas where idDueno = ?'
    conexion.query(sql,[id], (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        }
    });
});
//--------------------

module.exports = router;