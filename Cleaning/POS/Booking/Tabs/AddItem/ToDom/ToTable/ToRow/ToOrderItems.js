import { StartFunc as StartFuncFromAddOns } from "../../../FromLocalStorage/FromAddOns.js";

let StartFunc = ({ inItemSerial }) => {
    let jVarLocalAddOnDataJson = StartFuncFromAddOns({ inItemSerial });
    console.log("jVarLocalAddOnDataJson : ", jVarLocalAddOnDataJson);
};

export { StartFunc };