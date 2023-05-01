import { StartFunc as StartFuncToAddOns } from "../ToAddOns.js";

let StartFunc = (event) => {
    jFLocalItemSerialButtonClickFunc(event);
};

let jFLocalItemSerialButtonClickFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalClosestTr = jVarLocalCurrentTarget.closest("tr");

    let jVarLocalDataFromrow = jFLocalFromRowTable({ inJVarClosestTr: jVarLocalClosestTr });

    console.log("jVarLocalDataFromrow : ", jVarLocalDataFromrow);
    // let jVarLocalOrderItemsCategoryClass = jVarLocalClosestTr.querySelector(".OrderItemsCategoryClass");
    // jVarLocalOrderItemsCategoryClass.innerHTML = inCategory;

    // let jVarLocalOrderItemsOrderItemsItemNameClass = clone.querySelector(".OrderItemsItemNameClass");
    // jVarLocalOrderItemsOrderItemsItemNameClass.innerHTML = inItemName;

    // let jVarLocalOrderItemsOrderItemsRateClass = clone.querySelector(".OrderItemsRateClass");
    // jVarLocalOrderItemsOrderItemsRateClass.innerHTML = inItemRate;

    // let jVarLocalOrderItemsOrderItemsItemWashClass = clone.querySelector(".OrderItemsItemWashClass");
    // jVarLocalOrderItemsOrderItemsItemWashClass.innerHTML = inWashType;

    // let jVarLocalOrderItemsOrderItemsAddOnClass = clone.querySelector(".OrderItemsAddOnClass");
    // jVarLocalOrderItemsOrderItemsAddOnClass.innerHTML = inAddOn;

    // let jVarLocalOrderItemsOrderItemsItemPcsClass = clone.querySelector(".OrderItemsItemPcsClass");
    // jVarLocalOrderItemsOrderItemsItemPcsClass.innerHTML = inPcs;

    StartFuncToAddOns({ inItemSerial: jVarLocalCurrentTarget.value });
};


let jFLocalFromRowTable = ({ inJVarClosestTr }) => {
    let jVarLocalReturnObject = {};

    let jVarLocalOrderItemsCategoryClass = inJVarClosestTr.querySelector(".OrderItemsCategoryClass");

    console.log("aaaaa : ", jVarLocalOrderItemsCategoryClass);

    // jVarLocalOrderItemsCategoryClass.innerHTML = inCategory;
    jVarLocalReturnObject.Category = jVarLocalOrderItemsCategoryClass.innerHTML;

    return jVarLocalReturnObject;
    // let jVarLocalOrderItemsOrderItemsItemNameClass = clone.querySelector(".OrderItemsItemNameClass");
    // jVarLocalOrderItemsOrderItemsItemNameClass.innerHTML = inItemName;

    // let jVarLocalOrderItemsOrderItemsRateClass = clone.querySelector(".OrderItemsRateClass");
    // jVarLocalOrderItemsOrderItemsRateClass.innerHTML = inItemRate;

    // let jVarLocalOrderItemsOrderItemsItemWashClass = clone.querySelector(".OrderItemsItemWashClass");
    // jVarLocalOrderItemsOrderItemsItemWashClass.innerHTML = inWashType;

    // let jVarLocalOrderItemsOrderItemsAddOnClass = clone.querySelector(".OrderItemsAddOnClass");
    // jVarLocalOrderItemsOrderItemsAddOnClass.innerHTML = inAddOn;

    // let jVarLocalOrderItemsOrderItemsItemPcsClass = clone.querySelector(".OrderItemsItemPcsClass");
    // jVarLocalOrderItemsOrderItemsItemPcsClass.innerHTML = inPcs;

    //  console.log("jVarLocalCurrentTarget : ", jVarLocalOrderItemsCategoryClass.innerHTML);
    //  StartFuncToAddOns({ inItemSerial: jVarLocalCurrentTarget.value });
};

export { StartFunc };