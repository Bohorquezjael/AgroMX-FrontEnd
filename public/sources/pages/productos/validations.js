/** Validaciones
 * Tenemos que validar que el precio sea un número positivo mayor a 0
 * El precio no debe contener letras, ni simbolos especiales
 * El stock debe ser mayor a 0 y estar dentro de un rango de 1000
 * Que el nombre no sea muy largo y sea una cadena
 * 
*/


const validateFields = (name, price, stock) =>{
    let mensaje = false;
    if(name.match(/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{1,30}$/)){
        if(typeof(price) === "number" && (price > 0 && price < 1000) ){
            if(typeof(stock) === "number" && (stock > 0 && stock < 1000)){
                mensaje = true;
            }
        }
    } 
    alert(mensaje ? "Los datos son válidos." : "Los datos no son válidos.");
    return mensaje;
};

export{validateFields};