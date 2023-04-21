const StartFunc = (params) => {
    let jVarLocalMenItems = localStorage.getItem("MenItems");
    let jVarLocalMenItemsJson = JSON.parse(jVarLocalMenItems);
    // let jVarLocalSorted = jVarLocalMenItemsJson.sort((a, b) => { return b - a });

    let jVarLocalSorted = jVarLocalMenItemsJson.sort((a, b) => { return b.Pcs - a.Pcs });
    // let jVarLocalItem1 = jVarLocalMenItemsJson.find(jVarlocalFindItem => jVarlocalFindItem.pk = 16);

    // const jVarLocalRow = React.createElement("div", {
    //     className: "row"
    // }, jFLocalCreateButton({ inItemName: "Shirt", inItemRate: 60 }),
    //     jFLocalCreateButton({ inItemName: "Pant", inItemRate: 70 }),
    //     jFLocalCreateButton({ inItemName: "Jeans" }));

    const jVarLocalRow = React.createElement("div", {
        className: "row"
    }, jFLocalCreateButton({
        inItemName: jVarLocalSorted[0].ItemName,
        inItemRate: jVarLocalSorted[0].DryWashRate
    }),
        jFLocalCreateButton({
            inItemName: jVarLocalSorted[1].ItemName,
            inItemRate: jVarLocalSorted[1].DryWashRate
        }),
        jFLocalCreateButton({
            inItemName: jVarLocalSorted[2].ItemName,
            inItemRate: jVarLocalSorted[2].DryWashRate
        }));

    const container = document.getElementById('MenFrequentItems');
    const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(jVarLocalRow);
};

const jFLocalItemClick = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalItemName = jVarLocalCurrentTarget.value;
    let jVarLocalRate = jVarLocalCurrentTarget.dataset.rate;
    let jVarClosestTabPane = jVarLocalCurrentTarget.closest(".tab-pane");
    let jVarHtmlRate = jVarClosestTabPane.querySelector(".RateClass");

    let jVarLocalItemSelectId = document.getElementById("ItemSelectId");

    selectItemByValue({
        inHtmlSelect: jVarLocalItemSelectId,
        inItemName: jVarLocalItemName
    });

    jVarHtmlRate.value = jVarLocalRate;
};

const jFLocalCreateButton = ({ inItemName, inItemRate }) => {
    let jVarLocalItemName = inItemName;

    const k1 = React.createElement("input", {
        className: "btn btn-primary",
        type: "button",
        value: jVarLocalItemName,
        "data-rate": inItemRate,
        onClick: jFLocalItemClick
    }, null);

    return React.createElement("div", {
        className: "col"
    }, k1);
};

function selectItemByValue({ inHtmlSelect, inItemName }) {
    for (var i = 0; i < inHtmlSelect.options.length; i++) {
        if (inHtmlSelect.options[i].text === inItemName) {
            inHtmlSelect.selectedIndex = i;
            // return inHtmlSelect.options[i].value;
            break;
        }
    }
}
export { StartFunc }