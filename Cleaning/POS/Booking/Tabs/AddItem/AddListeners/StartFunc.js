import { StartFuncs as StartFuncItemButtonClick } from "./AddItem/AddItemButton.js";
import { StartFunc as StartFuncAddOn } from "./AddOn/ButtonClick.js";
import { StartFunc as StartFuncOnChange } from "./OnChange/StartFunc.js";

let StartFunc = () => {
    StartFuncItemButtonClick();
    StartFuncAddOn();
    StartFuncOnChange();
};

export { StartFunc };