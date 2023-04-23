let StartFunc = () => {
    jFCommonSelectFill({
        inLocalStorageKey: "MenItems",
        inHtmlId: "MenItemsTabId"
    });

    jFCommonSelectFill({
        inLocalStorageKey: "WomenItems",
        inHtmlId: "WomenItemsTabId"
    });
};

let jFCommonSelectFill = ({ inLocalStorageKey, inHtmlId }) => {
    let jVarLocalFromLocalStorage = localStorage.getItem(inLocalStorageKey);
    let jVarLocalinHtmlId = document.getElementById(inHtmlId);
    let jVarLocalWomanWashSelectId = jVarLocalinHtmlId.querySelector("select.ItemSelect");

    let jVarLocalMenItems = JSON.parse(jVarLocalFromLocalStorage).map(element => {
        return {
            ItemName: element.ItemName,
            pk: element.pk
        }
    });

    jFLocalAddToSelect({
        inData: jVarLocalMenItems,
        inHtmlSelect: jVarLocalWomanWashSelectId
    });
};
let StartFunc_Keshav_23Apr2023 = () => {
    let jVarLocalFromLocalStorage = localStorage.getItem("MenItems");
    let jVarLocalMenItems = JSON.parse(jVarLocalFromLocalStorage).map(element => {
        return {
            ItemName: element.ItemName,
            pk: element.pk
        }
    });

    jFLocalMenSelectFill({
        inWashTypeData: jVarLocalMenItems
    });
};

let jFLocalMenSelectFill = ({ inWashTypeData, inHtmlId }) => {
    let jVarLocalWomanWashSelectId = document.getElementById("ItemSelectId");

    jFLocalAddToSelect({
        inData: inWashTypeData,
        inHtmlSelect: jVarLocalWomanWashSelectId
    });
};

let jFLocalAddToSelect = ({ inData, inHtmlSelect }) => {
    if (inHtmlSelect === null === false) {
        inHtmlSelect.innerHTML = "";

        inData.forEach((element, LoopIndex) => {
            var car = new Option(element.ItemName, element.pk);
            inHtmlSelect.options.add(car);
        });
    };
};

export { StartFunc };