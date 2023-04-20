var resultContainer = document.getElementById('qr-reader-results');
var lastResult, countResults = 0;
var html5QrcodeScanner;

const options = {
    keyboard: false
};

let myModalAlternative = new bootstrap.Modal('#exampleModal', options);

const jFStartFunc = () => {
    let jFLocalShowModalId = document.getElementById("ShowModalId");

    jFLocalShowModalId.addEventListener("click", jFShowQrCodeFunc);
};

const jFShowQrCodeFunc = () => {
    myModalAlternative.show();

    html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", { fps: 10, qrbox: 250 });
    html5QrcodeScanner.render(onScanSuccess);
};


function onScanSuccess(decodedText, decodedResult) {
    if (decodedText !== lastResult) {
        ++countResults;
        lastResult = decodedText;

        resultContainer.innerHTML = lastResult;
        myModalAlternative.hide();

        html5QrcodeScanner.clear();
        // Handle on success condition with the decoded message.
        // console.log(`Scan result ${decodedText}`, decodedResult);
    }
};

jFStartFunc();