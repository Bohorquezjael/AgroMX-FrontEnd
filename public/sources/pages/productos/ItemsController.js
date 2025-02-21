// Create a ItemsController class
class ItemsController {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 50) {
        this.items = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    addItem(name, description, reason, info, price, stock, imageUrl) {
        console.log("Agregando item:", { name, description, reason, info, price, stock, imageUrl });
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            //id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
            name: name,
            description: description,
            imageUrl: imageUrl, 
            reason: reason,
            info: info,
            price: price,
            stock: stock
        };

        console.log("Item agregado: ", item);

        // Push the item to the items property
        this.items.push(item);
        this.saveToLocalStorage();
        //addItemCard(item);

    }

    saveToLocalStorage() {
        console.log("Guardando en localStorage:", JSON.stringify(this.items));
        localStorage.setItem("items", JSON.stringify(this.items));
        
    }

    loadItemsFromLocalStorage(){
        const storageItems = localStorage.getItem("items");
        if (storageItems){
            this.items = JSON.parse(storageItems);
            //this.items.forEach(item => addItemCard(item)); 
            //console.log("Items cargados desde localStorage: ", this.items);  
        } else {
            /* this.items = []; // Evita que sea undefined */
            console.log("No hay items en localStorage.");
        }
    }

}



// export {addItem};
export {ItemsController};