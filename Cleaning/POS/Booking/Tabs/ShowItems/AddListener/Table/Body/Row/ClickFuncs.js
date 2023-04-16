const StartFunc = () => {
    let jVarLocalShowItemsTableDeleteButtonClass = document.getElementsByClassName("ShowItemsTableDeleteButtonClass");

    for (let i = 0; i < jVarLocalShowItemsTableDeleteButtonClass.length; i++) {
        jVarLocalShowItemsTableDeleteButtonClass[i].addEventListener("click", jVarLocalDeleteFunc)
    };

};

const jVarLocalDeleteFunc = (event) => {
    Swal.fire('Any fool can use a computer')
};

export { StartFunc }