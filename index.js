var totalWords = 0; 
var wordBank = [];



//This function will be called when the button is pressed to generate a new card
function generateCard() {
    if(totalWords < 24){
        alert("You need to atleast 24 words, you have " + totalWords);
    }
    else{
        var usedIndexs = new Array(totalWords).fill(false);
        //iterate though all the non-Free cells
        for(var i=0; i<24; i++){
            setCell(i,usedIndexs);
        }
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
    document.getElementById(squareID).innerHTML = wordBank[index];
}

function importWordsToAdd(){
    var wordsFromPage = document.getElementById('wordsToAdd').value;
    var splitWords = wordsFromPage.split(/[\n, ]/).filter(word => word != "").map(formatWord);
    wordBank = [ ... new Set(wordBank.concat(splitWords))];
    totalWords = wordBank.length;
    //console.log(wordBank.length);
}

function importWordsToRemoveAndRemove(){
    var wordsFromPage = document.getElementById('wordsToRemove').value;
    var splitWords = wordsFromPage.split(/[\n, ]/).filter(word => word != "").map(formatWord);
    var wordBankRemove = [ ... new Set(splitWords)];
    
    console.log(wordBank);
    console.log(wordBankRemove);
    
    wordBankRemove.forEach(word => {
        var index = wordBank.indexOf(word);
        if (index > -1) {
            wordBank.splice(index, 1);
            totalWords -= 1;
        }
    });

    console.log(wordBank);
}

function formatWord(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}


window.addEventListener('DOMContentLoaded', function () {

    var AddWordsButton = document.getElementById('addWordsButton');
    AddWordsButton.addEventListener('click', importWordsToAdd);

    var RemoveWordsButton = document.getElementById('removeWordsButton');
    RemoveWordsButton.addEventListener('click', importWordsToRemoveAndRemove);

});




