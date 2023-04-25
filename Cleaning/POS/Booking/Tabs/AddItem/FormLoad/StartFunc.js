// import { StartFunc as StartFuncAddToLocalStorageWashTypesInsert } from "./AddToLocalStorage/WashTypesInsert.js";
// import { StartFunc as StartFuncAddToLocalStorageMenItems } from "./AddToLocalStorage/MenTab/MenItems.js";
// import { StartFunc as StartFuncAddToLocalStorageItemsInOrder } from "./AddToLocalStorage/ItemsTable/ItemsInOrder.js";

// import { StartFunc as StartFuncWashTypeFill } from "./FillSelect/WashTypeFill.js";
// import { StartFunc as StartFillSelect } from "./FillSelect/MenTab/MenItems.js";
// import { StartFunc as StartFuncToDomToOrderItems } from "./ToDom/ToTable/ToOrderItems.js";

import { StartFunc as StartFuncAddFrequent } from "./MenTab/AddFrequent.js";
import { StartFunc as StartFuncAddToDom } from "./AddToDom.js";

import { StartFunc as StartFuncToLocalStorageFuncs } from "./ToLocalStorageFuncs.js";

let StartFunc = () => {
    // StartFuncAddToLocalStorageWashTypesInsert();
    // StartFuncAddToLocalStorageMenItems();
    // StartFuncAddToLocalStorageItemsInOrder();
    
    StartFuncToLocalStorageFuncs();

    // StartFuncWashTypeFill();
    // StartFillSelect();
    // StartFuncToDomToOrderItems();
    StartFuncAddToDom();

    StartFuncAddFrequent();
};

export { StartFunc }