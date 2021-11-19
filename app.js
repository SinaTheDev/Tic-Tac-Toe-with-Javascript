// Tic Tac Toe Game 

// Declare Vars
let cells = document.querySelectorAll("li");
let li1 = document.getElementById('1');
let li2 = document.getElementById('2');
let li3 = document.getElementById('3');
let li4 = document.getElementById('4');
let li5 = document.getElementById('5');
let li6 = document.getElementById('6');
let li7 = document.getElementById('7');
let li8 = document.getElementById('8');
let li9 = document.getElementById('9');
let modal = document.querySelector("div.modal-container");
let winnerText = document.getElementById("winner");
let liContent = 0;

// Click Controlling 
for (let cell of cells) {
    cell.addEventListener("click", show);
    cell.addEventListener("click", cheackingWinner);
}

// Showing the Moves
function show() {
    if (liContent % 2 == 0) {
        this.textContent = "X";
        this.style.color = "red";
        liContent++;
        this.classList.add("disabled");
    }
    else {
        this.textContent = "O";
        this.style.color = "blue";
        liContent++;
        this.classList.add("disabled");
    }
}

// Checking GameOver

function cheackingWinner() {

    // cheaking draw
    if (liContent == 9){
        winnerText.textContent = "Draw";
        winnerText.style.color ="yellow";
        modal.classList.add("show");
    }


    // Cheaking Horizontal Cells

    if (li1.textContent == "O" && li2.textContent == "O" && li3.textContent == "O") {
        winnerText.textContent = "O Wins !!";
        winnerText.style.color ="blue";
        modal.classList.add("show");
    }
    else if (li1.textContent == "X" && li2.textContent == "X" && li3.textContent == "X") {
        winnerText.textContent = "X Wins !!";
        winnerText.style.color ="red";
        modal.classList.add("show");
    }
    else if (li4.textContent == "X" && li5.textContent == "X" && li6.textContent == "X") {
        winnerText.textContent = "X Wins !!";
        winnerText.style.color ="red";
        modal.classList.add("show");
    }
    else if (li4.textContent == "O" && li5.textContent == "O" && li6.textContent == "O") {
        winnerText.textContent = "O Wins !!";
        winnerText.style.color ="blue";
        modal.classList.add("show");
    }
    else if (li7.textContent == "O" && li8.textContent == "O" && li9.textContent == "O") {
        winnerText.textContent = "O Wins !!";
        winnerText.style.color ="blue";
        modal.classList.add("show");
    }
    else if (li7.textContent == "X" && li8.textContent == "X" && li9.textContent == "X") {
        winnerText.textContent = "X Wins !!";
        winnerText.style.color ="red";
        modal.classList.add("show");
    }

    //  Cheaking Vertical Cells

    else if (li1.textContent == "X" && li4.textContent == "X" && li7.textContent == "X") {
        winnerText.textContent = "X Wins !!";
        winnerText.style.color ="red";
        modal.classList.add("show");
    }
    else if (li1.textContent == "O" && li4.textContent == "O" && li7.textContent == "O") {
        winnerText.textContent = "O Wins !!";
        winnerText.style.color ="blue";
        modal.classList.add("show");
    }
    else if (li2.textContent == "X" && li5.textContent == "X" && li8.textContent == "X") {
        winnerText.textContent = "X Wins !!";
        winnerText.style.color ="red";
        modal.classList.add("show");
    }
    else if (li2.textContent == "O" && li5.textContent == "O" && li8.textContent == "O") {
        winnerText.textContent = "O Wins !!";
        winnerText.style.color ="blue";
        modal.classList.add("show");
    }
    else if (li3.textContent == "X" && li6.textContent == "X" && li9.textContent == "X") {
        winnerText.textContent = "X Wins !!";
        winnerText.style.color ="red";
        modal.classList.add("show");
    }
    else if (li3.textContent == "O" && li6.textContent == "O" && li9.textContent == "O") {
        winnerText.textContent = "O Wins !!";
        winnerText.style.color ="blue";
        modal.classList.add("show");
    }

    //  Checking X position 
    
    else if (li1.textContent == "X" && li5.textContent == "X" && li9.textContent == "X") {
        winnerText.textContent = "X Wins !!";
        winnerText.style.color ="red";
        modal.classList.add("show");
    }
    else if (li1.textContent == "O" && li5.textContent == "O" && li9.textContent == "O") {
        winnerText.textContent = "O Wins !!";
        winnerText.style.color ="blue";
        modal.classList.add("show");
    }
    else if (li3.textContent == "X" && li5.textContent == "X" && li7.textContent == "X") {
        winnerText.textContent = "X Wins !!";
        winnerText.style.color ="red";
        modal.classList.add("show");
    }
    else if (li3.textContent == "O" && li5.textContent == "O" && li7.textContent == "O") {
        winnerText.textContent = "O Wins !!";
        winnerText.style.color ="blue";
        modal.classList.add("show");
    }
}

