import { StartFunc as StartFuncWashTypesInsert } from "./AddToLocalStorage/WashTypesInsert.js";
import { StartFunc as StartFuncWashTypeFill } from "./FillSelect/WashTypeFill.js";
import { StartFunc as StartFuncAddFrequent } from "./MenTab/AddFrequent.js";
import { StartFunc as StartFuncMenItems } from "./AddToLocalStorage/MenTab/MenItems.js";
import { StartFunc as StartFillSelect } from "./FillSelect/MenTab/MenItems.js";

let StartFunc = () => {
    StartFuncWashTypesInsert();
    StartFuncMenItems();

    StartFuncWashTypeFill();
    StartFillSelect();

    StartFuncAddFrequent();
};

export { StartFunc }