import { StartFunc as StartFuncToAddOns } from "../ToTable/ToAddOns.js";

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

let jFLocalItemsInsertRow = ({ inRowPk, inTableBodyId, inCategory, inItemName, inWashType, inPcs, inItemRate, inAddOn, inTotal }) => {
    var table = inTableBodyId;

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(0);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);

    cell5.className = "text-end";
    cell6.className = "text-end";
    cell7.className = "text-end";
    cell8.className = "text-end";

    let jVarLocalSerialButton = document.createElement("input");
    jVarLocalSerialButton.type = "button";
    jVarLocalSerialButton.addEventListener("click", jFLocalItemSerialButtonClickFunc);

    // jVarLocalSerialButton.value = jVarLocalTableRowLength + 1;
    jVarLocalSerialButton.value = inRowPk;

    cell1.appendChild(jVarLocalSerialButton);

    // cell1.innerHTML = jVarLocalTableRowLength + 1;
    cell2.innerHTML = inCategory;
    cell3.innerHTML = inItemName;
    cell4.innerHTML = inWashType;
    cell5.innerHTML = inPcs;
    cell6.innerHTML = `₹ ${inItemRate}`;
    cell7.innerHTML = `₹ ${inAddOn}`;
    cell8.innerHTML = `₹ ${inTotal}`;

    //     <button type="button" class="btn btn-outline-danger">
    //                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    //   <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
    //   <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path>
    // </svg>
    //                 Button
    //               </button>

};

let jFLocalItemsInsertRowFromTemplate = ({ inRowPk, inTableBodyId, inCategory, inItemName, inWashType, inPcs, inItemRate, inAddOn, inTotal }) => {
    var table = inTableBodyId;
    let jVarLocalTemplateForOrderItemsTableRow = document.getElementById("TemplateForOrderItemsTableRow");

    const clone = jVarLocalTemplateForOrderItemsTableRow.content.cloneNode(true);
    let jVarLocalOrderItemsCategoryClass = clone.querySelector(".OrderItemsCategoryClass");
    jVarLocalOrderItemsCategoryClass.innerHTML = inCategory;
   
    let jVarLocalOrderItemsOrderItemsItemNameClass = clone.querySelector(".OrderItemsItemNameClass");
    jVarLocalOrderItemsOrderItemsItemNameClass.innerHTML =  inItemName;

    let jVarLocalOrderItemsOrderItemsRateClass = clone.querySelector(".OrderItemsRateClass");
    jVarLocalOrderItemsOrderItemsRateClass.innerHTML = inItemRate;

    let jVarLocalOrderItemsOrderItemsItemWashClass = clone.querySelector(".OrderItemsItemWashClass");
    jVarLocalOrderItemsOrderItemsItemWashClass.innerHTML = inWashType;

    let jVarLocalOrderItemsOrderItemsAddOnClass = clone.querySelector(".OrderItemsAddOnClass");
    jVarLocalOrderItemsOrderItemsAddOnClass.innerHTML =  inAddOn;

    let jVarLocalOrderItemsOrderItemsItemPcsClass = clone.querySelector(".OrderItemsItemPcsClass");
    jVarLocalOrderItemsOrderItemsItemPcsClass.innerHTML =  inPcs;

    let jVarLocalOrderItemsOrderItemsTotalClass = clone.querySelector(".OrderItemsTotalClass");
    jVarLocalOrderItemsOrderItemsTotalClass.innerHTML =  inTotal;


    let jVarLocalOrderItemsOrderItemsDeleteButtonClass=clone.querySelector(".OrderItemsDeleteButtonClass");
    jVarLocalOrderItemsOrderItemsDeleteButtonClass.addEventListener("click",jFLocalItemDeleteButtonClickFunc)
    
    table.appendChild(clone);
};
const jFLocalItemDeleteButtonClickFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    console.log("hd",jVarLocalCurrentTarget);

}


const jFLocalItemSerialButtonClickFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalAddOnItemId = document.getElementById("AddOnItemId");

    console.log("jVarLocalCurrentTarget : ", jVarLocalCurrentTarget.value);
    jVarLocalAddOnItemId.value = jVarLocalCurrentTarget.value;

    let jVarLocalMenuTabAddOnId = document.getElementById("MenuTabAddOnId");
    jVarLocalMenuTabAddOnId.classList.add("col");
    jVarLocalMenuTabAddOnId.classList.remove("d-none");

    StartFuncToAddOns({ inItemSerial: jVarLocalCurrentTarget.value });
}


export { StartFunc };