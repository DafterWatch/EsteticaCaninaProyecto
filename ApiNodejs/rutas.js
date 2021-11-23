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
    let sql = `insert into usuarios(nombreUsuario, telefono, correo, cargoId, contra) 
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
    let sql = `select r.idReserva, r.idUsuario, u.nombreUsuario, r.idMascota, m.nombreMascota, r.idServicio, s.nombre, s.precio,r.fecha, r.hora from 
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
    const {fecha, hora} = req.body
    let sql = `select * from reservas where fecha = '${fecha}' and hora = '${hora}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json(rows[0]);
        }
    })
});
// get productos
router.get('/getProductos/',(req, res)=>{
    let sql = `select * from productos`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        }
    });
});
//modificar productos
router.put('/modificarProductos/:id',(req, res)=>{
    const {id}=req.params
    const {cantidad} = req.body
    let sql = `update productos set cantidad = ${cantidad} where idProducto = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json({status: 'productos modificado'});
        }
    })
});
//get reservas all
router.get('/getReservasAll/',(req, res)=>{
    let sql = `select r.idReserva, r.idUsuario, u.nombreUsuario, r.idMascota, m.nombreMascota, r.idServicio, s.nombre,s.precio, r.fecha, r.hora from 
	((reservas r inner join servicios s on r.idServicio = s.idServicio)
    inner join usuarios u on r.idUsuario = u.idUsuario)
    inner join mascotas m on r.idMascota = m.idMascota
    order by r.fecha desc`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        }
    });
});
//get reservas
router.get('/getReservasHistorial/:id',(req, res)=>{
    const {id} = req.params
    let sql = `select r.idReserva, r.idUsuario, u.nombreUsuario, r.idMascota, m.nombreMascota, r.idServicio, s.nombre,s.precio, r.fecha, r.hora from 
	((reservas r inner join servicios s on r.idServicio = s.idServicio)
    inner join usuarios u on r.idUsuario = u.idUsuario)
    inner join mascotas m on r.idMascota = m.idMascota
    where r.idReserva = ?
    order by r.fecha desc`
    conexion.query(sql,[id], (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows[0]);
        }
    });
});
//agregar reserva
router.post('/addServRealiz',(req, res)=>{
    const {idServicio, fecha, idUsuario} = req.body
    let sql = `insert into serviciosrealizados (idServicio, fecha, idUsuario)
                values('${idServicio}','${fecha}','${idUsuario}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json({status: 'reserva agregada'});
        }
    })
});
//agregar historial
router.post('/addHistorial',(req, res)=>{
    const {idUsuario, descripcion} = req.body
    let sql = `insert into historial(idUsuario, descripcion, idServicioRealizado)
                values('${idUsuario}','${descripcion}', (select count(*) from serviciosrealizados))`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json({status: 'historial agregada'});
        }
    })
});



//get reservasHistorial
router.get('/getbuscarHistorial/:id',(req, res)=>{
    const {id} = req.params
    let sql = `
    select r.idUsuario, r.idReserva,  u.nombreUsuario, r.idMascota, m.nombreMascota, r.idServicio, s.nombre, r.fecha, r.hora, h.descripcion from 
	((reservas r inner join servicios s on r.idServicio = s.idServicio)
    inner join historial h on r.idUsuario = h.idUsuario
    inner join usuarios u on r.idUsuario = u.idUsuario)
    inner join mascotas m on r.idMascota = m.idMascota
    where m.nombreMascota = ?
    
    order by r.fecha desc`
    conexion.query(sql,[id], (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows[0]);
        }
    });
});


//modificar historial
router.put('/modificarHistorial/:id',(req, res)=>{
    const {id}=req.params
    const {descripcion} = req.body
    let sql = `update historial set descripcion = ${descripcion} where idHistorial = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json({status: 'historial modificado'});
        }
    })
});








//agregar producto
router.post('/addProducto',(req, res)=>{
    const {nombreProducto, cantidad, precio} = req.body
    let sql = `insert into productos(nombreProducto, cantidad, precio)
                values('${nombreProducto}','${cantidad}', '${precio}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json({status: 'producto agregado'});
        }
    })
});
//eliminar producto
router.delete('/deleteProducto/:id',(req, res)=>{
    const {id}=req.params
    let sql = `delete from productos where idProducto = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json({status: 'producto eliminado'});
        }
    })
});
// get Empleados
router.get('/getEmpleados/',(req, res)=>{
    let sql = `select u.idUsuario, u.nombreUsuario, u.telefono, u.correo, u.contra, c.idCargo, c.nombre from 
    usuarios u inner join cargos c on u.cargoId = c.idCargo
    where cargoId = 2 or cargoId = 3`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        }
    });
});
//delete Empleado
router.delete('/deleteEmpleado/:id',(req, res)=>{
    const {id}=req.params
    let sql = `delete from usuarios where idUsuario = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json({status: 'empleado eliminado'});
        }
    })
});
//buscar 1 Empleado
router.get('/getUnEmpleado/:id',(req, res)=>{
    const {id}=req.params
    let sql = `select u.idUsuario, u.nombreUsuario, u.telefono, u.correo, u.contra, c.idCargo, c.nombre from 
    usuarios u inner join cargos c on u.cargoId = c.idCargo
    where idUsuario = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json(rows[0]);
        }
    })
});
//modificar empleado
router.put('/modificarEmpleado/:id',(req, res)=>{
    const {id}=req.params
    const {nombreUsuario, telefono, correo, cargoId, contra} = req.body
    let sql = `update usuarios 
    set nombreUsuario = '${nombreUsuario}',
    telefono = '${telefono}',
    correo = '${correo}',
    cargoId = '${cargoId}',
    contra = '${contra}'
    where idUsuario = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json({status: 'productos modificado'});
        }
    })
});
//delete Reserva
router.delete('/deleteReserva/:id',(req, res)=>{
    const {id}=req.params
    let sql = `delete from reservas where idReserva = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json({status: 'reserva eliminado'});
        }
    })
});
//buscar 1 Reserva
router.get('/getUnReserva/:id',(req, res)=>{
    const {id}=req.params
    let sql = `select * from reservas where idReserva = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json(rows[0]);
        }
    })
});
//modificar reserva
router.put('/modificarReserva/:id',(req, res)=>{
    const {id}=req.params
    const {idUsuario, idMascota, idServicio, fecha, hora} = req.body
    let sql = `update reservas 
    set idUsuario = '${idUsuario}',
    idMascota = '${idMascota}',
    idServicio = '${idServicio}',
    fecha = '${fecha}',
    hora = '${hora}'
    where idReserva = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json({status: 'reserva modificado'});
        }
    })
});
// get servicios realizados
router.get('/getServiciosRealizados/',(req, res)=>{
    let sql = `select s.idServicioRealizado, s.idServicio, ser.nombre ,ser.precio,fecha, s.idUsuario, nombreUsuario, idHistorial, descripcion from 
    ((serviciosrealizados s inner join historial h 
    on s.idServicioRealizado = h.idServicioRealizado)
    inner join servicios ser on s.idServicio = ser.idServicio)
    inner join usuarios u on s.idUsuario = u.idUsuario`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        }
    });
});
//--------------------

module.exports = router;