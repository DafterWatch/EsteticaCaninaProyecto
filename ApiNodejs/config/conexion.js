const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    //aqui ingresan sus contraseñas de mysql
    //password: '',
    password: 'hmfdzpkjqx1',
    port: 3306,
    //nombre de la bd
    database: 'BD_estetica'
});

conexion.connect((err)=>{
    if(err){
        console.log("Ocurrio un error "+err);
    } else {
        console.log("Conexion exitosa");
    }
});

module.exports = conexion;