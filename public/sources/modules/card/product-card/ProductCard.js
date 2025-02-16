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

          <div class="d-flex col-4 col-sm-3 col-md-3 col-lg-2 p-1">
                <div class="card" >
                        <img src="${this.imagen.getImageUrl()}" class="card-img-top product-img img-thumbnail" alt="${this.imagen.description}">
                    <div class="card-body">
                        <div class="card-title-container">
                            <h5 title="${this.nombre}" class="card-nombre">
                            ${this.nombre.length > 50 ? this.nombre.substring(0, 47) + "..." : this.nombre}
                            </h5>
                        </div class= "texto-tarjeta">
                        <p class="card-text"><strong>Precio: $${this.precio}</strong></p>
                    </div>
                    <div class="card-footer h-100">
                    <button class="btn btn-primary"> Agregar a la canasta</a>
                    </div>
                </div>
            </div>
        `;
  }



}

export { ProductCard };
