import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";

let StartFuncs = () => {
    StartFuncFormLoad();
    StartFuncAddListeners();
    // StartFuncItemButtonClick();
};

StartFuncs();