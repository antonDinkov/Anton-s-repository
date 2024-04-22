function barcodeGenerator(input) {
    let startDiapason = input[0];
    let endDiapason = input[1];
    let printView = '';

    for (let j = Number(startDiapason[0]); j <= Number(endDiapason[0]); j++) {
        for (let k = Number(startDiapason[1]); k <= Number(endDiapason[1]); k++) {
            for (let l = Number(startDiapason[2]); l <= Number(endDiapason[2]); l++) {
                for (let m = Number(startDiapason[3]); m <= Number(endDiapason[3]); m++) {
                    let prePrintView = j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0 && m % 2 !== 0;
                    if (prePrintView) {
                        printView += `${j}${k}${l}${m} `;
                    }
                }
            }
        }
    }

    console.log(printView);
}
barcodeGenerator(["3256","6579"])