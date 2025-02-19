// Create a ItemsController class
class ItemsController {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
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
    }
}

// export {addItem};
export {ItemsController};