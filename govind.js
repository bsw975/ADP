var printThisManyRows = 21;

for (let i = 0; i < printThisManyRows; i++) {
    printOneRow(i);
}
function printOneRow (rowNumToPrint) {
    let lastRowElement;
    let RowElement;
    let RowElementArray = [];
    for (let i = 0; i <= rowNumToPrint; i++) {
        if (i == 0) {
            RowElement = 1;
            lastRowElement = 1;
        } else {
            RowElement = lastRowElement * (rowNumToPrint + 1 - i) / i;
            lastRowElement = RowElement;
        }
        RowElementArray.push(RowElement);
    }
    console.log(RowElementArray);
}
