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
//get reservas
router.get('/getReservas/:id',(req, res)=>{
    const {id} = req.params
    let sql = `select r.idReserva, r.idUsuario, u.nombreUsuario, r.idMascota, m.nombreMascota, r.idServicio, s.nombre, r.fecha, r.hora from 
	((reservas r inner join servicios s on r.idServicio = s.idServicio)
    inner join usuarios u on r.idUsuario = u.idUsuario)
    inner join mascotas m on r.idMascota = m.idMascota
    where r.idUsuario = ?
    order by r.fecha desc`
    conexion.query(sql,[id], (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        }
    });
});
//get servicios
router.get('/getServicios/',(req, res)=>{
    let sql = `select * from servicios`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        }
    });
});
//agregar reserva
router.post('/addReserva',(req, res)=>{
    const {idUsuario, idMascota, idServicio, fecha, hora} = req.body
    let sql = `insert into reservas (idUsuario, idMascota, idServicio, fecha, hora)
                values('${idUsuario}','${idMascota}','${idServicio}','${fecha}','${hora}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json({status: 'reserva agregada'});
        }
    })
});
//get validar reserva
router.post('/getValidarReserva',(req, res)=>{
    const {idUsuario, fecha} = req.body
    let sql = `select * from reservas where idUsuario = '${idUsuario}' and fecha = '${fecha}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json(rows[0]);
        }
    })
});
//--------------------

module.exports = router;