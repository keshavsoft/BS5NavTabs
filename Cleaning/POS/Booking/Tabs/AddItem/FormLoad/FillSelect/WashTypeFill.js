let StartFunc = () => {
    let jVarLocalFromLocalStorage = localStorage.getItem("WashTypes");
    let jVarLocalWomanWashSelectId = document.getElementById("WomanWashSelectId");

    jFLocalAddToSelect({
        inData: JSON.parse(jVarLocalFromLocalStorage),
        inHtmlSelect: jVarLocalWomanWashSelectId
    });
};

let jFLocalAddToSelect = ({ inData, inHtmlSelect }) => {
    inData.forEach((element, LoopIndex) => {
        var car = new Option(element, LoopIndex);
        inHtmlSelect.options.add(car);
    });
};

export { StartFunc };