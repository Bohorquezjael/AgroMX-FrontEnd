/** Validaciones
 * Tenemos que validar que el precio sea un número positivo mayor a 0
 * El precio no debe contener letras, ni simbolos especiales
 * El stock debe ser mayor a 0 y estar dentro de un rango de 1000
 * Que el nombre no sea muy largo y sea una cadena
 * 
*/
import { ItemsController } from "./ItemsController.js";

const validateFields = (name, description, reason, info, price, stock, imageUrl) =>{
    let mensaje = false;
    if(name.match(/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{1,30}$/)){
        if(typeof(price) === "number" && (price > 0 && price < 1000) ){
            if(typeof(stock) === "number" && (stock > 0 && stock < 1000)){
                itemsController.addItem(name, description, reason, info, price, stock, imageUrl);
                
                ItemNameInput.value = '';
                ItemDescription.value = '';
                ItemStock.value = '';
                ItemPrice.value = '';
                ItemReason.value = '';
                ItemInfo.value = '';
                ItemImage.value = '';
                mensaje = true;
            }
        }

        alert ('Los datos son válidos');
    } else {alert( 'Los datos no son válidos');}
    //alert(mensaje ? "Los datos son válidos." : "Los datos no son válidos.");
    //return mensaje;
};

export{validateFields};