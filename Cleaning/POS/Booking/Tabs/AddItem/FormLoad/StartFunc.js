import { StartFunc as StartFuncWashTypesInsert } from "./AddToLocalStorage/WashTypesInsert.js";
import { StartFunc as StartFuncWashTypeFill } from "./FillSelect/WashTypeFill.js";

let StartFunc = () => {
    StartFuncWashTypesInsert();
    StartFuncWashTypeFill();
};

export { StartFunc }