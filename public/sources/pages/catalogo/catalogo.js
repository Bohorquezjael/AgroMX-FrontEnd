/* import { insertMainHeader } from "/src/modules/header/header.js";
import { insertMainFooter } from "/src/modules/footer/footer.js";
*/

import { getProducts } from "/public/sources/modules/api/getProducts.js";

/*
insertMainHeader();
insertMainFooter();
*/


getProducts('/public/sources/pages/catalogo/data2.json');