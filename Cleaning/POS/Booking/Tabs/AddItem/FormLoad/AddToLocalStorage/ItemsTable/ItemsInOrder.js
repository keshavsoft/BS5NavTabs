import data from './ItemsInOrder.json' assert {type: 'json'};

let StartFunc = () => {
    localStorage.setItem("ItemsInOrder", JSON.stringify(data));
};

export { StartFunc };