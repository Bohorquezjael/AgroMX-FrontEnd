const itemsController = new ItemsController();
itemsController.loadItemsFromLocalStorage();

itemsController.items.forEach(addItemCard);

function addItemCard(item) {
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
}

// Mostrar los ítems almacenados

