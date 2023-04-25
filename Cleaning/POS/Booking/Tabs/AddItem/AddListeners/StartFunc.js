import { StartFuncs as StartFuncItemButtonClick } from "./AddItem/AddItemButton.js";
import { StartFunc as StartFuncAddOn } from "./AddOn/ButtonClick.js";

let StartFunc = () => {
    StartFuncItemButtonClick();
    StartFuncAddOn();
};

export { StartFunc };