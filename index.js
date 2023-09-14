const numbers = [];
 function generateBingoNumbers() {
for(let i=1; i<=76;i++){
    numbers.push(i)
}
    return numbers;
}

function populateBingoTable() {
    const bingoNumbers = generateBingoNumbers();
    const tableBody = document.getElementById("bingo-table-body");

    let row;
    for (let i = 0; i < bingoNumbers.length; i++) {
        if (i % 5 === 0) {
            row = tableBody.insertRow();
        }
        const cell = row.insertCell();
        cell.innerText = bingoNumbers[i];
    }
}

populateBingoTable();
 
const thebutton = document.getElementById("roll");
thebutton.addEventListener("click",function(){

const randomNum = Math.floor(Math.random() * 76) + 1;


let x = document.querySelectorAll("table td");
x.forEach(function(td){
    if (Number(td.textContent) === randomNum)
    td.style.backgroundColor = "grey";
    
  
}) 

})