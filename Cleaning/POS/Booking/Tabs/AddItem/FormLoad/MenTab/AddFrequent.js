const StartFunc = () => {
    jFMenTab({
        inLocalStorateKey: "MenItems",
        inHtmlId: "MenFrequentItems"
    });

    jFMenTab({
        inLocalStorateKey: "WomenItems",
        inHtmlId: "WomenFrequentItems"
    });
};

const jFMenTab = ({ inLocalStorateKey, inHtmlId }) => {
    let jVarLocalinLocalStorateKey = inLocalStorateKey;
    let jVarLocalinHtmlId = inHtmlId;

    let jVarLocalMenItems = localStorage.getItem(jVarLocalinLocalStorateKey);
    let jVarLocalMenItemsJson = JSON.parse(jVarLocalMenItems);

    let jVarLocalSorted = jVarLocalMenItemsJson.sort((a, b) => { return b.Pcs - a.Pcs });

    const container = document.getElementById(jVarLocalinHtmlId);
    let jVarLocalRow = document.createElement("div");
    jVarLocalRow.className = "row";

    if (jVarLocalSorted.length > 0) {
        jVarLocalRow.appendChild(jFLocalCreateButton({
            inItemName: jVarLocalSorted[0].ItemName,
            inItemRate: jVarLocalSorted[0].DryWashRate
        }));
    };

    if (jVarLocalSorted.length > 1) {
        jVarLocalRow.appendChild(jFLocalCreateButton({
            inItemName: jVarLocalSorted[1].ItemName,
            inItemRate: jVarLocalSorted[1].DryWashRate
        }));
    };

    if (jVarLocalSorted.length > 2) {
        jVarLocalRow.appendChild(jFLocalCreateButton({
            inItemName: jVarLocalSorted[2].ItemName,
            inItemRate: jVarLocalSorted[2].DryWashRate
        }));
    };

    container.appendChild(jVarLocalRow);

    console.log("container : ", container);
    // const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
    // root.render(jVarLocalRow);

    // const container = document.getElementById(jVarLocalinHtmlId);
    // const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
    // root.render(jVarLocalRow);
};

const StartFunc1 = () => {
    let jVarLocalMenItems = localStorage.getItem("MenItems");
    let jVarLocalMenItemsJson = JSON.parse(jVarLocalMenItems);

    let jVarLocalSorted = jVarLocalMenItemsJson.sort((a, b) => { return b.Pcs - a.Pcs });

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

    let jVarLocalClosestTabPane = jVarLocalCurrentTarget.closest(".tab-pane");
    // let jVarLocalinHtmlId = document.getElementById(inHtmlId);
    let jVarLocalItemSelectId = jVarLocalClosestTabPane.querySelector("select.ItemSelect");

    // let jVarLocalItemSelectId = document.getElementById("ItemSelectId");

    selectItemByValue({
        inHtmlSelect: jVarLocalItemSelectId,
        inItemName: jVarLocalItemName
    });

    jVarHtmlRate.value = jVarLocalRate;
};

const jFLocalCreateButtonInReact = ({ inItemName, inItemRate }) => {
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

const jFLocalCreateButton = ({ inItemName, inItemRate }) => {
    let jVarLocalItemName = inItemName;
    let jVarLocalCol = document.createElement("div");
    jVarLocalCol.className = "col";

    let jVarLocalButton = document.createElement("input");
    jVarLocalButton.type = "button";
    jVarLocalButton.value = jVarLocalItemName;
    jVarLocalButton.className = "btn btn-primary";
    jVarLocalButton.dataset.rate = inItemRate;
    jVarLocalButton.addEventListener("click", jFLocalItemClick);

    jVarLocalCol.appendChild(jVarLocalButton);

    // const k1 = React.createElement("input", {
    //     className: "btn btn-primary",
    //     type: "button",
    //     value: jVarLocalItemName,
    //     "data-rate": inItemRate,
    //     onClick: jFLocalItemClick
    // }, null);

    // return React.createElement("div", {
    //     className: "col"
    // }, k1);

    return jVarLocalCol;
};


function selectItemByValue({ inHtmlSelect, inItemName }) {
    for (var i = 0; i < inHtmlSelect.options.length; i++) {
        if (inHtmlSelect.options[i].text === inItemName) {
            inHtmlSelect.selectedIndex = i;
            // return inHtmlSelect.options[i].value;
            break;
        }
    }
};

export { StartFunc }