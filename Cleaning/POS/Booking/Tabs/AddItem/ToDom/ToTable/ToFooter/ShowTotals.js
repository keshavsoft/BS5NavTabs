import { StartFunc as StartFuncFromAddOnsAll } from "../../../FromLocalStorage/FromAddOnsAll.js";

let StartFunc = ({ inJsonData }) => {
    jFLocalShowTotals({ inJsonData });
};

let jFLocalShowTotals = ({ inJsonData }) => {
    let jVarLocalItemsTableFootPcs = document.getElementById("ItemsTableFootPcs");
    let jVarLocalItemsTableFootAddOn = document.getElementById("ItemsTableFootAddOn");
    let jVarLocalItemsTableFootTotal = document.getElementById("ItemsTableFootTotal");

    let jVarLocalPcsArray = inJsonData.map(element => element.Pcs);
    let sum = jVarLocalPcsArray.reduce((a, b) => a + b, 0);

    // let jVarLocalAddOnArray = inJsonData.map(element => parseInt(element.AddOn.split("-")[0]));
    // let sumAddOn = jVarLocalAddOnArray.reduce((a, b) => a + b, 0);

    // console.log("sumAddOn ", jVarLocalAddOnArray, sumAddOn);

    // let jVarLocalAddOnArrayAmont = inJsonData.map(element => parseInt(element.AddOn.split("-")[1]));
    // // let jVarLocalAddOnArrayAmont = inJsonData.map(element => element.AddOn);
    // let sumAddOnAmount = jVarLocalAddOnArrayAmont.reduce((a, b) => a + b, 0);
    // console.log("sumAddOnAmount ", sumAddOnAmount, jVarLocalAddOnArrayAmont);

    let jVarLocalTotalArray = inJsonData.map(element => element.Total);
    let sumTotal = jVarLocalTotalArray.reduce((a, b) => a + b, 0);

    jVarLocalItemsTableFootPcs.innerHTML = sum;
    // jVarLocalItemsTableFootAddOn.innerHTML = sumAddOn;
    jVarLocalItemsTableFootTotal.innerHTML = sumTotal;

    // let jVarLocalAddOnData = StartFuncFromAddOnsAll();

    // let jVarLocalAddOnRateArray = Object.values(jVarLocalAddOnData).map(element => element.AddOnRate);
    // let jVarLocalAddOnDataTotal = jVarLocalAddOnRateArray.reduce((a, b) => a + b, 0);
    // jVarLocalItemsTableFootAddOn.innerHTML = `${jVarLocalAddOnRateArray.length}-${jVarLocalAddOnDataTotal}`;
    
    // jVarLocalOrderItemsOrderItemsAddOnClass.innerHTML = `${jVarLocalAddOnRateArray.length}-${sum}`;
    jFLocalAddOnTotal({ inJsonData });
};

let jFLocalAddOnTotal = ({ inJsonData }) => {
    let jVarLocalItemsTableFootAddOn = document.getElementById("ItemsTableFootAddOn");

    let jVarLocalAddOnData = StartFuncFromAddOnsAll();

    let jVarLocalAddOnRateArray = Object.values(jVarLocalAddOnData).map(element => element.AddOnRate);
    let jVarLocalAddOnDataTotal = jVarLocalAddOnRateArray.reduce((a, b) => a + b, 0);
    jVarLocalItemsTableFootAddOn.innerHTML = `${jVarLocalAddOnRateArray.length}-${jVarLocalAddOnDataTotal}`;
};

export { StartFunc };