const StartFunc = () => {
    let jVarLocalShowItemsTableDeleteButtonClass = document.getElementsByClassName("ShowItemsTableDeleteButtonClass");

    for (let i = 0; i < jVarLocalShowItemsTableDeleteButtonClass.length; i++) {
        jVarLocalShowItemsTableDeleteButtonClass[i].addEventListener("click", jVarLocalDeleteFunc)
    };

};

const jVarLocalDeleteFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarClosestTr = jVarLocalCurrentTarget.closest("tr");

  //  jVarLocalRemoveAllTtemsRowColours();

    jVarClosestTr.classList.add("table-success");
    console.log("jVarClosestTr : ", jVarClosestTr);
    // Swal.fire('Any fool can use a computer')
};


const jVarLocalRemoveAllTtemsRowColours = (event) => {
    let jVarLocalItemsTableId = document.getElementById("ItemsTableBodyId");
    let jVarLocalRows = jVarLocalItemsTableId.rows;
    console.log("aaaaaaa : ", jVarLocalRows);
    for (let i in jVarLocalRows) {
        console.log("222222 : ", i);

        let row = jVarLocalRows[i];
        console.log("row : ", i, row.classList);
        row.classList.remove("table-success");
    };

    for (var i = 0, row; row = jVarLocalRows[i]; i++) {
    
     }

};

export { StartFunc }