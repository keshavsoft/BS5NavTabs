let StartFunc = () => {
    let jVarLocalAddOnInsertButtonId = document.getElementById("AddOnInsertButtonId");

    jVarLocalAddOnInsertButtonId.addEventListener("click", jFLocalButtonClick);


};
let jFLocalButtonClick = () => {
    jFLocalPrepareData();
    console.log("ssssssssssssss");
};

let jFLocalPrepareData = () => {
    let jVarLocalAddOnServiceId = document.getElementById("AddOnServiceId");
    let jVarLocalAddOnRateId = document.getElementById("AddOnRateId");

    let jVarLocalAddOnServiceIdValue = jVarLocalAddOnServiceId.value;
    let jVarLocalAddOnRateIdValue = jVarLocalAddOnRateId.value;

    var jVarLocalAddOnServiceIdtext = jVarLocalAddOnServiceId.options[jVarLocalAddOnServiceId.selectedIndex].text;

    jFLocalInsertRow({
        inAddOnService: jVarLocalAddOnServiceIdtext,
        inAddOnRate: jVarLocalAddOnRateIdValue
    });
};

let jFLocalInsertRow = ({ inAddOnService, inAddOnRate }) => {
    var table = document.getElementById("AddOnTableBodyId");
    let jVarLocalTableRowLength = table.rows.length

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(0);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    // Add some text to the new cells:
    cell1.innerHTML = jVarLocalTableRowLength + 1;
    cell2.innerHTML = inAddOnService;
    cell3.innerHTML = inAddOnRate;
};



export { StartFunc };