import data from './OrderItems.json' assert {type: 'json'};

let StartFunc = () => {
    localStorage.setItem("OrderItems", JSON.stringify(data));
};

export { StartFunc };