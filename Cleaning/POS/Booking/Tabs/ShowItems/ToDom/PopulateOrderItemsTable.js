const StartFunc = ({ inLocalStorageKey }) => {
    let jVarLocalStorageKey = inLocalStorageKey;
    // let jVarLocalStorageKey="OrderItems";

    let jVarLocalFromLocalStorage = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalOrderItemsJson = JSON.parse(jVarLocalFromLocalStorage);
    console.log("jVarLocalOrderItemsJson : ", jVarLocalOrderItemsJson);
};

export { StartFunc }