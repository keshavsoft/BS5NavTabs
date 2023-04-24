import { StartFunc as StartFuncAddToLocalStorageWashTypesInsert } from "./AddToLocalStorage/WashTypesInsert.js";
import { StartFunc as StartFuncAddToLocalStorageMenItems } from "./AddToLocalStorage/MenTab/MenItems.js";
import { StartFunc as StartFuncAddToLocalStorageItemsInOrder } from "./AddToLocalStorage/ItemsTable/ItemsInOrder.js";

let StartFunc = () => {
    StartFuncAddToLocalStorageWashTypesInsert();
    StartFuncAddToLocalStorageMenItems();
    StartFuncAddToLocalStorageItemsInOrder();
};

export { StartFunc }