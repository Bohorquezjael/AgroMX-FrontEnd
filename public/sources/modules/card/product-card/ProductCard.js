import { CardImage } from "/public/sources/modules/card/card-image/CardImage.js";
//FIXME: 

class ProductCard {

  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    //!FIXME: tratar el atributo descrpcion : no mostrar en el HTML
    this.imagen = new CardImage(imagen, nombre);
  }
  //? Método para generar el HTML de la tarjeta

  generateHTML() {
    return `
<style>
  #texto-boton {
    font-family: "Mako", serif;
    font-weight: 400;
    font-style: normal;
  } 

  #texto-precio {
    font-family: "Mako", serif;
    font-weight: 400;
    font-style: normal;
  } 
</style>

            <div class="col-10 col-md-3 p-1">
                <div class="card" >                  
                        <img src="${this.imagen.getImageUrl()}" class="card-img-top product-img img-thumbnail" alt="${this.imagen.description}">
                    <div class="card-body">
                        <div class="card-title-container">
                            <h5 title="${this.nombre}" class="card-nombre">
                            ${this.nombre.length > 50 ? this.nombre.substring(0, 47) + "..." : this.nombre}
                            </h5>
                        </div>
                        <p class="card-text" id="texto-precio"><strong>Precio: $${this.precio}</strong></p>
                    </div>
                    <div class="card-footer">
                    <button class="btn btn-primary" id="texto-boton"> Agregar a la canasta</a>
                    </div>
                </div>
            </div>
        `;
  }



}

export { ProductCard };
