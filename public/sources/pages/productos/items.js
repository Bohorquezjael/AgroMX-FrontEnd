import { ItemsController } from "./ItemsController.js";

const itemsController = new ItemsController();
itemsController.loadItemsFromLocalStorage();

//itemsController.items.forEach(addItemCard);
console.log("Productos cargados:", itemsController.items);

/* function addItemCard(item) {
    const itemHTML = `
        <div class="card" style="width: 20rem; margin-bottom: 20px;">
            <img src="${item.imageUrl}" class="card-img-top" style="height: 250px; object-fit: cover;" alt="image">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
            </div>
        </div>
    `;
    
    document.getElementById("list-items").innerHTML += itemHTML;
} */

    function addItemCard(item) {
        const itemHTML = `
           <!-- <div class="card" style="width: 20rem; margin-bottom: 20px;">
                <img src="${item.imageUrl}" class="card-img-top" style="height: 250px; object-fit: cover;" alt="image">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                </div>
            </div> -->
            <div class="col-10 col-md-3 p-1">
                <div class="card" >                  
                        <img src="${item.imageUrl}" class="card-img-top product-img img-thumbnail">
                    <div class="card-body">
                        <div class="card-title-container">
                            <h5 title="${item.name}}" class="card-nombre">
                            ${item.name.length > 50 ? item.name.substring(0, 47) + "..." : item.name}
                            </h5>
                        </div>
                        <p class="card-text" id="texto-precio"><strong>Precio: $${item.price}</strong></p>
                    </div>
                    <div class="card-footer">
                    <button class="btn btn-primary" id="texto-boton"> Agregar a la canasta</a>
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById("list-items").insertAdjacentHTML("beforeend", itemHTML);
    }


// Mostrar los ítems almacenados

itemsController.items.forEach(item => {
    addItemCard(item);
});
