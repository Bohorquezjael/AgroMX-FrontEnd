// Create a ItemsController class
class ItemsController {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 50) {
        this.items = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    addItem(name, description, reason, info, price, stock, imageUrl) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl, 
            reason: reason,
            info: info,
            price: price,
            stock: stock
        };

        // Push the item to the items property
        this.items.push(item);
        this.saveToLocalStorage();
        //addItemCard(item);

    }

    saveToLocalStorage() {
        localStorage.setItem("items", JSON.stringify(this.items));
        console.log("Prueba de localStorage");
    }

    loadItemsFromLocalStorage(){
        const storageItems = localStorage.getItem("items")
        if (storageItems){
            this.items = JSON.parse(storageItems);
            //this.items.forEach(item => addItemCard(item));
            
        }
    }

}



// export {addItem};
export {ItemsController};