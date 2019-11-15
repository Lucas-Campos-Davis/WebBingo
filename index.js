var totalWords = 48; //TODO: This will change when you can add words



//This function will be called when the page is loaded
function generateCard() {
    var usedIndexs = new Array(totalWords).fill(false);
    //iterate though all the non-Free cells
    for(var i=0; i<24; i++){
        setCell(i,usedIndexs);
    }
}

// Sets individual cells in the HTML
function setCell(squareNum, usedIndexs) {
    var squareID = "s"+squareNum;
    var index; //This will be used to acces the array of words the user enters

    do{
        index = Math.floor((Math.random() * totalWords));
    }while(usedIndexs[index]);

    usedIndexs[index] = true;
    document.getElementById(squareID).innerHTML = index; //TODO: Change this to use the word corresponding to the index
}




