import { validateFields } from "./validations";
import { addItem } from "./ItemsController";

// Initialize a new TaskManager with currentId set to 0
const itemsController = new ItemsController(0);

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
    const stock = ItemStock.value;
    const price = ItemPrice.value;
    const reason =ItemReason.value;
    const info = ItemInfo.value;
    const imageUrl = ItemImage.value;

    
        /*
        Validation code here
    */
   validateFields(name,price,stock);

    // Add the task to the task manager
    itemsController.addItem(name, description, reason, info, price, stock, imageUrl);

    // Clear the form
    ItemNameInput.value = '';
    ItemDescription.value = '';
});




function addItemCard(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItemCard({'name':'juice',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Orange and Apple juice fresh and delicious'});

addItemCard({'name':'Tayto',
    'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
    'description':'Cheese & Onion Chips'})