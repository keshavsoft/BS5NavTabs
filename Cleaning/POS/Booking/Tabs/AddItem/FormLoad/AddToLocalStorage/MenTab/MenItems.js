import data from './MenItems.json' assert {type: 'json'};

let StartFunc = () => {
    localStorage.setItem("MenItems", JSON.stringify(data));
};

export { StartFunc };