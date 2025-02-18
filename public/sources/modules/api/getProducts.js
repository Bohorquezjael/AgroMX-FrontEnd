import { generateCardsOfProducts } from "/public/sources/modules/card/generateCardsOfProducts.js";
import { insertCardsToHTML } from "/public/sources/modules/card/insertCardsToHTML.js";


const getProducts = async (url) => {

  try {
    const response = await fetch(url);
    const products = await response.json();
    // TODO crear función DTO  cont productsDTO = conversionDTO( products);
    // TODO const cards = generateCardsOfProducts( productsDTO );
    console.log(Array.isArray(products));
    const cards = generateCardsOfProducts(products);
    insertCardsToHTML(cards);
  } catch (error) {
    console.error("Error al obtener producto");
    console.error(error);
  }
}

export { getProducts };
