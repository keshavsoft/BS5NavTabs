import { StartFunc as StartFuncToDom } from "../../ToDom/ToTable/ToOrderItems.js";

let StartFuncs = () => {
    jFLocalMenTab();
};

let jFLocalMenTab = () => {
    let jVarLocalMenItemsTabId = document.getElementById("MenItemsTabId");

    if (jVarLocalMenItemsTabId === null === false) {
        let jVarLocalAddButton = jVarLocalMenItemsTabId.querySelector(".AddItemButtonClass");

        if (jVarLocalAddButton === null === false) jVarLocalAddButton.addEventListener("click", localAddItemButtonFunc);
    };
};

let localAddItemButtonFunc = (event) => {
    try {
        let jVarLocalEvent = event;
        let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;

        let jVarObjectToInsert = jFLocalPrepareObject({ inCurrentTarget: jVarLocalCurrentTarget });

        jFLocalToLocalStorage({ inObjectToInsert: jVarObjectToInsert });

        StartFuncToDom();

        let jVarLocalItemsShowCollapseId = document.getElementById("ItemsShowCollapseId");

        let jVarLocalBSItemsShowCollapseId = bootstrap.Collapse.getOrCreateInstance(jVarLocalItemsShowCollapseId);

        jVarLocalBSItemsShowCollapseId.show();
    } catch (error) {
        console.log("error : ", error);
    };
};

let jFLocalToLocalStorage = ({ inObjectToInsert }) => {
    try {
        let jVarObjectToInsert = inObjectToInsert;

        let jVLocalFromLocalStorate = localStorage.getItem("ItemsInOrder");
        let jVarLocalItemsArray = JSON.parse(jVLocalFromLocalStorate);
        jVarLocalItemsArray.push(jVarObjectToInsert);

        localStorage.setItem("ItemsInOrder", JSON.stringify(jVarLocalItemsArray));


    } catch (error) {
        console.log("error : ", error);
    };
};

let jFLocalPrepareObject = ({ inCurrentTarget }) => {
    try {
        let jVarLocalCurrentTarget = inCurrentTarget;

        let jVarClosestTabPane = jVarLocalCurrentTarget.closest(".tab-pane");
        let jVarLocalItemSelect = jVarClosestTabPane.querySelector(".ItemSelect");
        let jVarLocalWashType = jVarClosestTabPane.querySelector(".WashTypeClass");
        let jVarLocalPcs = jVarClosestTabPane.querySelector(".PcsClass");
        let jVarLocalRate = jVarClosestTabPane.querySelector(".RateClass");

        let jVarLocalCategory = jVarClosestTabPane.dataset.category;

        let localItemSelectPk = jVarLocalItemSelect.value;
        let localItemSelect = selectItemByValue({ inHtmlSelect: jVarLocalItemSelect });

        let localWashSelectPk = jVarLocalItemSelect.value;
        let localWashSelect = selectItemByValue({ inHtmlSelect: jVarLocalWashType });

        // let localWashSelect = jFLocalFromSelectFunc({ inHtmlSelect: jVarLocalWashType });

        let localPcs = jFLocalFromDomAsInt({ inHtmlId: jVarLocalPcs });
        let localRate = jFLocalFromDomAsInt({ inHtmlId: jVarLocalRate });

        let localReturnObject = {
            Category: jVarLocalCategory,
            ItemName: localItemSelect,
            ItemNamePk: localItemSelectPk,
            WashType: localWashSelect,
            WashTypePk: localWashSelectPk,
            ...localPcs,
            ...localRate,
            AddOn: 0,
            Total: 0
        };

        return localReturnObject;
    } catch (error) {
        console.log("error : ", error);
    };

};


let jFLocalFromSelectFunc = ({ inHtmlSelect }) => {
    let jVarLocalReturnObject = {};
    // let jVarLocalItemSelectId = document.getElementById("ItemSelectId");
    let jVarLocalItemSelectId = inHtmlSelect;

    let jVarLocalItemSelectIdValue = jVarLocalItemSelectId.value;
    let jVarLocalItemSelectIdName = jVarLocalItemSelectId.name;

    jVarLocalReturnObject[jVarLocalItemSelectIdName] = jVarLocalItemSelectIdValue;

    return jVarLocalReturnObject;
};

let jFLocalFromDomAsInt = ({ inHtmlId }) => {
    let jVarLocalReturnObject = {};
    let jVarLocalPcsId = inHtmlId;

    let jVarLocalPcsIdValue = jVarLocalPcsId.value;
    let jVarLocalPcsIdName = jVarLocalPcsId.name;

    jVarLocalReturnObject[jVarLocalPcsIdName] = parseInt(jVarLocalPcsIdValue);
    return jVarLocalReturnObject;
};


function selectItemByValue({ inHtmlSelect }) {
    for (var i = 0; i < inHtmlSelect.options.length; i++) {
        if (inHtmlSelect.options[i].value === inHtmlSelect.value) {
            return inHtmlSelect.options[i].text;
        }
    }
};


//Kid's tab funcs end
export { StartFuncs };