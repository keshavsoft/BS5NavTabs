import data from './WashTypes.json' assert {type: 'json'};

let StartFunc = () => {
    console.log("data : ", data);
    localStorage.setItem("WashTypes", JSON.stringify(data));
};

export { StartFunc };