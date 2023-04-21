let StartFunc = () => {
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

let jFLocalMenSelectFill = ({ inWashTypeData }) => {
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