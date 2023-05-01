import { StartFunc as StartFuncToAddOns } from "./ToAddOns.js";
import { StartFunc as StartFuncFromAddOns } from "../../FromLocalStorage/FromAddOns.js";
import { StartFunc as StartFuncToRow } from "./ToRow/ToOrderItems.js";

let StartFunc = () => {
    let jVarLocalItemsTableBodyId = "ItemsTableBodyId";
    var jVarLocalHtmlTableBody = document.getElementById(jVarLocalItemsTableBodyId);

    jVarLocalHtmlTableBody.innerHTML = "";

    PullFromLocalStorage({ inTableBodyId: jVarLocalHtmlTableBody });
};

let PullFromLocalStorage = ({ inTableBodyId }) => {
    let jVarLocalItemsInOrder = localStorage.getItem("ItemsInOrder");
    let jVarLocaljVarLocalItemsInOrderJson = JSON.parse(jVarLocalItemsInOrder);

    Object.entries(jVarLocaljVarLocalItemsInOrderJson).forEach(
        ([key, element]) => {
            jFLocalItemsInsertRowFromTemplate({
                inRowPk: key,
                inTableBodyId,
                inCategory: element.Category,
                inItemName: element.ItemName,
                inWashType: element.WashType,
                inPcs: element.Pcs,
                inItemRate: element.Rate,
                inAddOn: element.AddOn,
                inTotal: element.Total
            });
        }
    );

    jFLocalShowTotals({ inJsonData: Object.values(jVarLocaljVarLocalItemsInOrderJson) });
};

let jFLocalShowTotals = ({ inJsonData }) => {
    let jVarLocalItemsTableFootPcs = document.getElementById("ItemsTableFootPcs");
    let jVarLocalItemsTableFootAddOn = document.getElementById("ItemsTableFootAddOn");
    let jVarLocalItemsTableFootTotal = document.getElementById("ItemsTableFootTotal");

    let jVarLocalPcsArray = inJsonData.map(element => element.Pcs);
    let sum = jVarLocalPcsArray.reduce((a, b) => a + b, 0);

    let jVarLocalAddOnArray = inJsonData.map(element => element.AddOn);
    let sumAddOn = jVarLocalAddOnArray.reduce((a, b) => a + b, 0);

    let jVarLocalTotalArray = inJsonData.map(element => element.Total);
    let sumTotal = jVarLocalTotalArray.reduce((a, b) => a + b, 0);

    jVarLocalItemsTableFootPcs.innerHTML = sum;
    jVarLocalItemsTableFootAddOn.innerHTML = sumAddOn;
    jVarLocalItemsTableFootTotal.innerHTML = sumTotal;
};

let jFLocalItemSerialButtonClickFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;

    StartFuncToAddOns({ inItemSerial: jVarLocalCurrentTarget.value });
};

let jFLocalItemsInsertRowFromTemplate = ({ inRowPk, inTableBodyId, inCategory, inItemName, inWashType, inPcs, inItemRate, inAddOn, inTotal }) => {
    var table = inTableBodyId;
    let jVarLocalTemplateForOrderItemsTableRow = document.getElementById("TemplateForOrderItemsTableRow");

    // let jVarLocalAddOnDataJson = StartFuncFromAddOns({ inItemSerial: inRowPk });
    // console.log("jVarLocalAddOnDataJson : ", jVarLocalAddOnDataJson);

    const clone = jVarLocalTemplateForOrderItemsTableRow.content.cloneNode(true);

    let jVarLocalOrderItemsSerialButtonClass = clone.querySelector(".OrderItemsSerialButtonClass");
    jVarLocalOrderItemsSerialButtonClass.value = inRowPk;
    jVarLocalOrderItemsSerialButtonClass.addEventListener("click", jFLocalItemSerialButtonClickFunc);

    let jVarLocalOrderItemsCategoryClass = clone.querySelector(".OrderItemsCategoryClass");
    jVarLocalOrderItemsCategoryClass.innerHTML = inCategory;

    let jVarLocalOrderItemsOrderItemsItemNameClass = clone.querySelector(".OrderItemsItemNameClass");
    jVarLocalOrderItemsOrderItemsItemNameClass.innerHTML = inItemName;

    let jVarLocalOrderItemsOrderItemsRateClass = clone.querySelector(".OrderItemsRateClass");
    jVarLocalOrderItemsOrderItemsRateClass.innerHTML = inItemRate;

    let jVarLocalOrderItemsOrderItemsItemWashClass = clone.querySelector(".OrderItemsItemWashClass");
    jVarLocalOrderItemsOrderItemsItemWashClass.innerHTML = inWashType;

    let jVarLocalOrderItemsOrderItemsAddOnClass = clone.querySelector(".OrderItemsAddOnClass");
    jVarLocalOrderItemsOrderItemsAddOnClass.innerHTML = inAddOn;

    let jVarLocalOrderItemsOrderItemsItemPcsClass = clone.querySelector(".OrderItemsItemPcsClass");
    jVarLocalOrderItemsOrderItemsItemPcsClass.innerHTML = inPcs;

    let jVarLocalOrderItemsOrderItemsTotalClass = clone.querySelector(".OrderItemsTotalClass");
    jVarLocalOrderItemsOrderItemsTotalClass.innerHTML = inTotal;

    let jVarLocalOrderItemsOrderItemsDeleteButtonClass = clone.querySelector(".OrderItemsDeleteButtonClass");
    jVarLocalOrderItemsOrderItemsDeleteButtonClass.addEventListener("click", jFLocalItemDeleteButtonClickFunc)

    let jVarLocalOrderItemsOrderItemsEditButtonClass = clone.querySelector(".OrderItemsEditButtonClass");
    jVarLocalOrderItemsOrderItemsEditButtonClass.addEventListener("click", jFLocalItemEditButtonClickFunc)

    StartFuncToRow({ inItemSerial: inRowPk, inClonedTemplateRow: clone });

    table.appendChild(clone);
};

const jFLocalItemDeleteButtonClickFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    console.log("Delete", jVarLocalCurrentTarget);

};

const jFLocalItemEditButtonClickFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    console.log("Edit", jVarLocalCurrentTarget);

};

export { StartFunc };