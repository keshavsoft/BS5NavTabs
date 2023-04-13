let StartFunc = () => {
    let jVarLocalCustomerSaveButtonId = document.getElementById("CustomerSaveButtonId");

    jVarLocalCustomerSaveButtonId.addEventListener("click", localFunc);


};
let localFunc = () => {
    let localCustomerName = jFLocalCustomerNameFunc();
    let localCustomerMobileNo = jFLocalCustomerMobileFunc();
    let localCustomerArea = jFLocalCustomerAreaFunc();
    let localCustomerCity = jFLocalCustomerCityFunc();
    let localCustomerData = {
        ...localCustomerName,
        ...localCustomerArea,
        ...localCustomerMobileNo,
        ...localCustomerCity
    };
    console.log("localCustomerData", localCustomerData);

    return localCustomerData;

};


let jFLocalCustomerNameFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalCustomerNameId = document.getElementById("CustomerNameId");

    let jVarLocalCustomerNameIdValue = jVarLocalCustomerNameId.value;
    let jVarLocalCustomerNameIdName = jVarLocalCustomerNameId.name;


    jVarLocalReturnObject[jVarLocalCustomerNameIdName] = jVarLocalCustomerNameIdValue;

    return jVarLocalReturnObject;
};

let jFLocalCustomerMobileFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalCustomerMobileId = document.getElementById("CustomerMobileId");

    let jVarLocalCustomerMobileIdValue = jVarLocalCustomerMobileId.value;
    let jVarLocalCustomeMobileIdName = jVarLocalCustomerMobileId.name;

    jVarLocalReturnObject[jVarLocalCustomeMobileIdName] = jVarLocalCustomerMobileIdValue;
    return jVarLocalReturnObject;
};

let jFLocalCustomerAreaFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalCustomerAreaId = document.getElementById("CustomerAreaId");

    let jVarLocalCustomerAreaIdValue = jVarLocalCustomerAreaId.value;
    let jVarLocalCustomerAreaIdName = jVarLocalCustomerAreaId.name;

    jVarLocalReturnObject[jVarLocalCustomerAreaIdName] = jVarLocalCustomerAreaIdValue;
    return jVarLocalReturnObject;
};

let jFLocalCustomerCityFunc = () => {
    let jVarLocalReturnObject = {};
    let jVarLocalCustomerCityId = document.getElementById("CustomerCityId");

    let jVarLocalCustomerCityIdValue = jVarLocalCustomerCityId.value;
    let jVarLocalCustomerCityIdName = jVarLocalCustomerCityId.name;

    jVarLocalReturnObject[jVarLocalCustomerCityIdName] = jVarLocalCustomerCityIdValue;

    return jVarLocalReturnObject;
};


export { StartFunc };