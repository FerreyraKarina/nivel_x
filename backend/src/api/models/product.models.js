import connection from "../database/db.js"; // importa el pool de conexiones con db.js, permite hacer consultas SQL

const selectAllProducts = () => {
    const sql = "SELECT id, name, price, image, category, active FROM products";
    return connection.query(sql);
} // trae todos los productos. 

const selectProductById = (id) => {
    const sql = "SELECT id, name, price, image, category, active FROM products WHERE id = ?";
    return connection.query(sql, [id]);
} // trae segun el id 

const insertProduct = (name, image, category, price) => {
    const sql = "INSERT INTO products (name, image, category, price, active) VALUES (?, ?, ?, ?, 1)";
    return connection.query(sql, [name, image, category, price]);
} // inserta productos nuevos

const updateProduct = (name, image, price, category, id) => {
    const sql = "UPDATE products SET name = ?, image = ?, price = ?, category = ? WHERE id = ?";
    return connection.query(sql, [name, image, price, category, id]);
} // modifica 

const deleteProduct = (id) => {
    const sql = "UPDATE products SET active = 0 WHERE id = ?";
    return connection.query(sql, [id]);
} // no lo elimina del todo, solo lo cambia a 0, poniendolo en inactivo asi el front no lo muestra

const activateProduct = (id) => {
    const sql = "UPDATE products SET active = 1 WHERE id = ?";
    return connection.query(sql, [id]);
} //reactiva un producto si se encontraba inactivo 

export default {
    selectAllProducts,
    selectProductById,
    insertProduct,
    updateProduct,
    deleteProduct,
    activateProduct
} // exporta todas las funciones juntas 