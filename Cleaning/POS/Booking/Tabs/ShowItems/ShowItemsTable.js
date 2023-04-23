import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncToDom } from "./ToDom/PopulateOrderItemsTable.js";
import { StartFunc as StartFuncAddListener } from "./AddListener/Table/Body/Row/ClickFuncs.js";

let jVarCommonStorageOrderItemsKey = "OrderItems";

const StartFunc = () => {
    StartFuncFormLoad();
    StartFuncToDom({ inLocalStorageKey: jVarCommonStorageOrderItemsKey });
    StartFuncAddListener();
};

StartFunc();