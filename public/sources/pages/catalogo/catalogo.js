/* import { insertMainHeader } from "/src/modules/header/header.js";
import { insertMainFooter } from "/src/modules/footer/footer.js";
*/

import { getProducts } from "../../modules/api/getProducts/getProducts.js";

/*
insertMainHeader();
insertMainFooter();
*/


getProducts('/public/sources/pages/catalogo/data2.json');