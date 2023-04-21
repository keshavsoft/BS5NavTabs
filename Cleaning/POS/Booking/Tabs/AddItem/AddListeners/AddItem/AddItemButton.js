let StartFuncs = () => {
    let jVarLocalAddItemButtonId = document.getElementById("AddItemButtonId");
    jVarLocalAddItemButtonId.addEventListener("click", localAddItemButtonFunc);

    let jVarLocalWomanAddItemButtonId = document.getElementById("WomanAddItemButtonId");
    let jVarLocalKidAddItemButtonId = document.getElementById("KidAddItemButtonId");

    if (jVarLocalWomanAddItemButtonId === null === false) jVarLocalWomanAddItemButtonId.addEventListener("click", localWomanAddItemButtonFunc);
    if (jVarLocalKidAddItemButtonId === null === false) jVarLocalKidAddItemButtonId.addEventListener("click", localKidAddItemButtonFunc);
};

//man tab funcs start

let localAddItemButtonFunc = () => {
    //let jVarLocalAddItemButtonId = document.getElementById("AddItemButtonId");
    let localItemSelect = jFLocalItemSelectFunc();
    let localWashSelect = jFLocalWashSelectFunc();
    let localPcs = jFLocalPcsFunc();
    let localRate = jFLocalRateFunc();

    let localReturnObject = {
        ...localItemSelect,
        ...localWashSelect,
        ...localPcs,
        ...localRate
    };
    console.log("localReturnObject", localReturnObject);
    return localReturnObject;
};

let jFLocalItemSelectFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalItemSelectId = document.getElementById("ItemSelectId");

    let jVarLocalItemSelectIdValue = jVarLocalItemSelectId.value;
    let jVarLocalItemSelectIdName = jVarLocalItemSelectId.name;


    jVarLocalReturnObject[jVarLocalItemSelectIdName] = jVarLocalItemSelectIdValue;

    return jVarLocalReturnObject;
};



let jFLocalWashSelectFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalWashSelectId = document.getElementById("WashSelectId");

    let jVarLocalWashSelectIdValue = jVarLocalWashSelectId.value;
    let jVarLocalWashSelectIdName = jVarLocalWashSelectId.name;

    jVarLocalReturnObject[jVarLocalWashSelectIdName] = jVarLocalWashSelectIdValue;
    return jVarLocalReturnObject;
};

let jFLocalPcsFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalPcsId = document.getElementById("PcsId");

    let jVarLocalPcsIdValue = jVarLocalPcsId.value;
    let jVarLocalPcsIdName = jVarLocalPcsId.name;

    jVarLocalReturnObject[jVarLocalPcsIdName] = jVarLocalPcsIdValue;
    return jVarLocalReturnObject;
};

let jFLocalRateFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalRateId = document.getElementById("RateId");

    let jVarLocalRateIdValue = jVarLocalRateId.value;
    let jVarLocalRateIdName = jVarLocalRateId.name;

    jVarLocalReturnObject[jVarLocalRateIdName] = jVarLocalRateIdValue;

    return jVarLocalReturnObject;
};



//man tab funcs end

//Woman tab funcs start

let jFLocalWomanItemSelectFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalWomanItemSelectId = document.getElementById("WomanItemSelectId");

    let jVarLocalWomanItemSelectIdValue = jVarLocalWomanItemSelectId.value;
    let jVarLocalWomanItemSelectIdName = jVarLocalWomanItemSelectId.name;


    jVarLocalReturnObject[jVarLocalWomanItemSelectIdName] = jVarLocalWomanItemSelectIdValue;

    return jVarLocalReturnObject;
};



let jFLocalWomanWashSelectFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalWomanWashSelectId = document.getElementById("WomanWashSelectId");

    let jVarLocalWomanWashSelectIdValue = jVarLocalWomanWashSelectId.value;
    let jVarLocalWomanWashSelectIdName = jVarLocalWomanWashSelectId.name;

    jVarLocalReturnObject[jVarLocalWomanWashSelectIdName] = jVarLocalWomanWashSelectIdValue;
    return jVarLocalReturnObject;
};

let jFLocalWomanPcsFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalWomanPcsId = document.getElementById("WomanPcsId");

    let jVarLocalWomanPcsIdValue = jVarLocalWomanPcsId.value;
    let jVarLocalWomanPcsIdName = jVarLocalWomanPcsId.name;

    jVarLocalReturnObject[jVarLocalWomanPcsIdName] = jVarLocalWomanPcsIdValue;
    return jVarLocalReturnObject;
};

let jFLocalWomanRateFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalWomanRateId = document.getElementById("WomanRateId");

    let jVarLocalWomanRateIdValue = jVarLocalWomanRateId.value;
    let jVarLocalWomanRateIdName = jVarLocalWomanRateId.name;

    jVarLocalReturnObject[jVarLocalWomanRateIdName] = jVarLocalWomanRateIdValue;

    return jVarLocalReturnObject;
};

let localWomanAddItemButtonFunc = () => {
    let jVarLocalWomanAddItemButtonId = document.getElementById("WomanAddItemButtonId");
    let localWomanItemSelect = jFLocalWomanItemSelectFunc();
    let localWomanWashSelect = jFLocalWomanWashSelectFunc();
    let localWomanPcs = jFLocalWomanPcsFunc();
    let localWomanRate = jFLocalWomanRateFunc();

    let localReturnObject = {
        ...localWomanItemSelect,
        ...localWomanWashSelect,
        ...localWomanPcs,
        ...localWomanRate
    };
    console.log("localReturnObject", localReturnObject);
    return localReturnObject;
};

//Woman tab funcs end

//Kid's tab funcs start

let jFLocalKidItemSelectFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalKidItemSelectId = document.getElementById("KidItemSelectId");

    let jVarLocalKidItemSelectIdValue = jVarLocalKidItemSelectId.value;
    let jVarLocalKidItemSelectIdName = jVarLocalKidItemSelectId.name;


    jVarLocalReturnObject[jVarLocalKidItemSelectIdName] = jVarLocalKidItemSelectIdValue;

    return jVarLocalReturnObject;
};



let jFLocalKidWashSelectFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalKidWashSelectId = document.getElementById("KidWashSelectId");

    let jVarLocalKidWashSelectIdValue = jVarLocalKidWashSelectId.value;
    let jVarLocalKidWashSelectIdName = jVarLocalKidWashSelectId.name;

    jVarLocalReturnObject[jVarLocalKidWashSelectIdName] = jVarLocalKidWashSelectIdValue;
    return jVarLocalReturnObject;
};

let jFLocalKidPcsFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalKidPcsId = document.getElementById("KidPcsId");

    let jVarLocalKidPcsIdValue = jVarLocalKidPcsId.value;
    let jVarLocalKidPcsIdName = jVarLocalKidPcsId.name;

    jVarLocalReturnObject[jVarLocalKidPcsIdName] = jVarLocalKidPcsIdValue;
    return jVarLocalReturnObject;
};

let jFLocalKidRateFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalKidRateId = document.getElementById("KidRateId");

    let jVarLocalKidRateIdValue = jVarLocalKidRateId.value;
    let jVarLocalKidRateIdName = jVarLocalKidRateId.name;

    jVarLocalReturnObject[jVarLocalKidRateIdName] = jVarLocalKidRateIdValue;

    return jVarLocalReturnObject;
};

let localKidAddItemButtonFunc = () => {
    let jVarLocalKidAddItemButtonId = document.getElementById("KidAddItemButtonId");
    let localKidItemSelect = jFLocalKidItemSelectFunc();
    let localKidWashSelect = jFLocalKidWashSelectFunc();
    let localKidPcs = jFLocalKidPcsFunc();
    let localKidRate = jFLocalKidRateFunc();

    let localReturnObject = {
        ...localKidItemSelect,
        ...localKidWashSelect,
        ...localKidPcs,
        ...localKidRate
    };
    console.log("localReturnObject", localReturnObject);
    return localReturnObject;
};

//Kid's tab funcs end
export { StartFuncs };