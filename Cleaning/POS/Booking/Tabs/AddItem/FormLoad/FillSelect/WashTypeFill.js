let StartFunc = () => {
    let jVarLocalFromLocalStorage = localStorage.getItem("WashTypes");

    jFLocalMenSelectFill({ inWashTypeData: JSON.parse(jVarLocalFromLocalStorage) });
    jFLocalWomenSelectFill({ inWashTypeData: JSON.parse(jVarLocalFromLocalStorage) });
};

let jFLocalWomenSelectFill = ({ inWashTypeData }) => {
    let jVarLocalWomanWashSelectId = document.getElementById("WomanWashSelectId");

    jFLocalAddToSelect({
        inData: inWashTypeData,
        inHtmlSelect: jVarLocalWomanWashSelectId
    });
};

let jFLocalMenSelectFill = ({ inWashTypeData }) => {
    let jVarLocalWomanWashSelectId = document.getElementById("WashSelectId");

    jFLocalAddToSelect({
        inData: inWashTypeData,
        inHtmlSelect: jVarLocalWomanWashSelectId
    });
};

let jFLocalAddToSelect = ({ inData, inHtmlSelect }) => {
    inHtmlSelect.innerHTML = "";

    inData.forEach((element, LoopIndex) => {
        var car = new Option(element, LoopIndex);
        inHtmlSelect.options.add(car);
    });
};

export { StartFunc };