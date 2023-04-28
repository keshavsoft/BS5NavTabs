import { StartFunc as StartFuncOrderItemsTableRow } from "../../FetchFuncs/FetchHtml/OrderItemsTableRow.js";

let StartFunc = async () => {
    let jVarLocalTemplateForOrderItemsTableRow = document.getElementById("TemplateForOrderItemsTableRow");
    let jVarLocalFromTemplate = await StartFuncOrderItemsTableRow();
    console.log("jVarLocalFromTemplate : ", jVarLocalFromTemplate);
    if (jVarLocalFromTemplate.KTF) {
        jVarLocalTemplateForOrderItemsTableRow.innerHTML = jVarLocalFromTemplate.HtmlString;
    };
};

export { StartFunc };