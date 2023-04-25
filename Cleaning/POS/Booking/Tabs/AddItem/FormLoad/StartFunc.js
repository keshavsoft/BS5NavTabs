import { StartFunc as StartFuncAddFrequent } from "./MenTab/AddFrequent.js";
import { StartFunc as StartFuncAddToDom } from "./AddToDom.js";

import { StartFunc as StartFuncToLocalStorageFuncs } from "./ToLocalStorageFuncs.js";

let StartFunc = () => {
    StartFuncToLocalStorageFuncs();
    StartFuncAddToDom();

    StartFuncAddFrequent();
};

export { StartFunc }