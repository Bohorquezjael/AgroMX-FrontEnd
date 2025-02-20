//import { validateFields } from "./validations.js";
import { ItemsController } from "./ItemsController.js";
import { validateFields } from "./validations.js";

// Initialize a new TaskManager with currentId set to 0
const itemsController = new ItemsController();
itemsController.loadItemsFromLocalStorage();
console.log("Items después de cargar:", itemsController.items);

// Select the New Task Form
const ItemForm = document.querySelector('#newItemForm');

// Add an 'onsubmit' event listener
ItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const ItemNameInput = document.querySelector('#producto');
    const ItemDescription = document.querySelector('#descripcion_producto');
    const ItemPrice = document.querySelector('#precio');
    const ItemStock = document.querySelector('#stock');
    const ItemReason = document.querySelector('#razon_compra');
    const ItemInfo = document.querySelector('#informacion_produccion');
    const ItemImage = document.querySelector('#imagen_producto');


    // Get the values of the inputs
    const name = ItemNameInput.value;
    const description = ItemDescription.value;
    const stock = parseInt(ItemStock.value);
    const price = parseFloat(ItemPrice.value);
    const reason =ItemReason.value;
    const info = ItemInfo.value;
    const imageUrl = ItemImage.value;

        if(validateFields(name, description, reason, info, price, stock, imageUrl)){
            alert("Producto agregado");
            itemsController.addItem(name, description, reason, info, price, stock, imageUrl);
        }
        else { alert("Los datos son inválidos");
        }
        /*
        Validation code here
    */
    //validateFields = (name, description, reason, info, price, stock, imageUrl)
    //if(name.match(/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{1,30}$/)){
        // if (name && description && imageUrl && stock && price && reason && info) {
        //     itemsController.addItem(name, description, reason, info, price, stock, imageUrl);
    
        /*     ItemNameInput.value = '';
            ItemDescription.value = '';
            ItemStock.value = '';
            ItemPrice.value = '';
            ItemReason.value = '';
            ItemInfo.value = '';
            ItemImage.value = ''; */
    
        //     alert('Item agregado correctamente.');
        // } else {
        //     alert('Por favor, llena todos los campos.');
        // }

    });

console.log("Hola, esta es la prueba");
console.log(localStorage.getItem("items"));



/* function addItemCard(item){
    const itemHTML = `
    <div class="card" style="width: 18rem;"> 
        <img src="${item.imageUrl}" class="card-img-top" alt="image">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <a href="#" class="btn btn-primary">Add</a>
        </div>
    </div>
    `;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

itemsController.items.forEach(addItemCard); */

//addItemCard(itemsController.addItem(name, description, reason, info, price, stock, imageUrl));

/* addItemCard({'name':'juice',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Orange and Apple juice fresh and delicious'});

addItemCard({'name':'Tayto',
    'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
    'description':'Cheese & Onion Chips'}) */