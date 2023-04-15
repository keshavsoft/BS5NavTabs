import { StartFuncs as StartFuncItemButtonClick } from "./AddListeners/AddItem/AddItemButton.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";

let StartFuncs = () => {
    StartFuncFormLoad();
    StartFuncItemButtonClick();
};

StartFuncs();