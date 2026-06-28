const loggerURL = (req, res, next) => { // define la funcion middleware, recibe los tres parametros de req(requerimientos, peticion que llego), res (respuesta) y next (cuando finaliza)
    let fecha = new Date(); 
    console.log(`[${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}] ${req.method} ${req.url}`);
    next();
}

const validateId = (req, res, next) => { //Lee el id que viene en la url y lo convierte en un numero. 
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "El ID debe ser un numero entero positivo"
        });
    } // verifica que sea un numero entero positivo, sino manda error 400 

    req.id = id; // si esta todo bien, lo guarda. 
    next();
}

const categoriasValidas = ["juegos", "accesorios"];
const validateProduct = (req, res, next) => {
    
    const { name, image, price, category } = req.body;
    const errores = []; // para la acumulacion de errores que haya 

    if (!name || !category || !price) {
        errores.push("Faltan campos requeridos");
    } // verifica que todos los campos obligatorios existan 

    if (typeof name !== "string" || name.trim().length < 2) {
        errores.push("El nombre debe tener al menos 2 caracteres");
    }

    if (typeof price !== "number" || price <= 0) {
        errores.push("El precio debe ser un numero mayor a 0");
    }

    if (!categoriasValidas.includes(category)) {
        errores.push("Categoria invalida");
    }

    if (errores.length > 0) {
        return res.status(400).json({
            message: "Datos invalidos",
            listaErrores: errores
        });
    } // si existe al menos un error, devuelve todo junto con un error 400

    next();
}

export {
    loggerURL,
    validateId,
    validateProduct
} // exports con nombre asi que se usan las llaves. 