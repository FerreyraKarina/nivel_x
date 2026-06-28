import dotenv from "dotenv"; // Importo la libreria dotenv, solo lee el archivo .env 

dotenv.config(); // Ejecuta dotenv, permite que las variables .env queden disponibles para toda la app.


export default { // exporta para que otros puedan importarlo sin llaves. 
    port: process.env.PORT || 3000, // si no existe PORT, usa 3000 igual
    database: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    } // Variables de conexion a MySQL del .env. 
}