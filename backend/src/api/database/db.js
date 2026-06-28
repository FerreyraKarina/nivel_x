import mysql2 from "mysql2/promise"; //importacion de MySql12 en modo promesas, para poder usar async/await.
import environments from "../config/environments.js"; 

const { database } = environments; // se extrae unicamente data base de environments 

const connection = mysql2.createPool({
    host: database.host,
    database: database.name,
    user: database.user,
    password: database.password
}); // creacion de las conexiones 

export default connection; // se exporta la conexion para que se pueda importar y hacer consultas. 
