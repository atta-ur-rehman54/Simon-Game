let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btns = ["red", "yellow", "green", "purple"];

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game started");
        started = true;
    }
    levelUp();
});

function levelUp() {
    level++;
    userSeq = [];
    h2.innerHTML = `level ${level}`;
    // random button choose
    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndex];
    let randomButton = document.querySelector(`.${randomColor}`)
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomButton);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}


function checkAns(idx) {

    // let idx = level-1;
    if (userSeq[idx] === gameSeq[idx]) { 
    if (userSeq.length == gameSeq.length) {
        setTimeout(levelUp, 1000);
    }
}
    else {
        h2.innerHTML = (`Game over! Your score was <b>${level}</b> </br> Press any key to start.`);
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 100);
        reset();
    }

}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}