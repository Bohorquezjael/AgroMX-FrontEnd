/** Validaciones
 * Tenemos que validar que el precio sea un número positivo mayor a 0
 * El precio no debe contener letras, ni simbolos especiales
 * El stock debe ser mayor a 0 y estar dentro de un rango de 1000
 * Que el nombre no sea muy largo y sea una cadena
 *
 */

import { ItemsController } from "./ItemsController.js";

const validateFields = (
	name,
	description,
	reason,
	info,
	price,
	stock,
	imageUrl
) => {
	if (name.match(/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{1,30}$/)) {
		if (typeof(price) === "number" && (price > 0 && price < 1000)) {
			if (typeof(stock) === "number" && (stock > 0 && stock < 1000)) {
				try {
					const objetoUrl = new URL(imageUrl);	
					if (
						objetoUrl.protocol === "http:" || objetoUrl.protocol === "https:"
					) {
						return true;
					}
				} catch (error) {
				}
			}
		}		
	}

	return false;
	//alert(mensaje ? "Los datos son válidos." : "Los datos no son válidos.");
	//return mensaje;
};

export { validateFields };
