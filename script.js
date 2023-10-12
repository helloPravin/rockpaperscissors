toggleButton.onclick = function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleIcon.innerHTML = "light_mode";
    } else {
        toggleIcon.innerHTML = "dark_mode";
    }
}


let moves = {
    ComputerMove: '',
    UserMove: ''
}

let result;

let score = {
    Wins: 0,
    Losses: 0,
    Ties: 0
}

let ComputerEmoji;
function ComputerMove() {
    const randomNo = Math.random();

    if (randomNo >= 0 && randomNo < 1 / 3) {
        moves.ComputerMove = 'Rock';
        ComputerChooses('&#9994');
    }
    else if (randomNo > 1 / 3 && randomNo < 2 / 3) {
        moves.ComputerMove = 'Paper';
        ComputerChooses('&#9995');
    }
    else if (randomNo >= 2 / 3 && randomNo < 1) {
        moves.ComputerMove = 'Scissors';
        ComputerChooses('&#9996');
    }
}


function userChooses(emojiUser) {
    whatUserMove.innerText = emojiUser;
};

function ComputerChooses(emojiComputer) {
    whatComputerMove.innerHTML = emojiComputer;
}

function showCurrentResult() {
    currentResult.innerText = `${result}`;

}


function checkResult() {

    if (moves.UserMove == moves.ComputerMove) {
        result = 'Tie';
    }
    else if (moves.UserMove == 'Rock' && moves.ComputerMove == 'Paper') {
        result = 'You Lose';
    }
    else if (moves.UserMove == 'Rock' && moves.ComputerMove == 'Scissors') {
        result = 'You Win';
    }
    else if (moves.UserMove == 'Paper' && moves.ComputerMove == 'Rock') {
        result = 'You Win';
    }
    else if (moves.UserMove == 'Paper' && moves.ComputerMove == 'Scissors') {
        result = 'You Lose';
    }
    else if (moves.UserMove == 'Scissors' && moves.ComputerMove == 'Rock') {
        result = 'You Lose';
    }
    else if (moves.UserMove == 'Scissors' && moves.ComputerMove == 'Paper') {
        result = 'You Win';
    }
}


function updateScore() {
    if (result == 'You Win') {
        score.Wins += 1;
        wins.innerText = `${score.Wins}`;
    }
    else if (result == 'You Lose') {
        score.Losses += 1;
        losses.innerText = `${score.Losses}`;
    }
    else if (result == 'Tie') {
        score.Ties += 1;
        ties.innerText = `${score.Ties}`;
    }
}


function logResult() {
    console.log(`Your Move: "${moves.UserMove}" & Computer's Move: "${moves.ComputerMove}", Result: "${result}"
Score: Wins: "${score.Wins}" Losses: "${score.Losses}" Ties: "${score.Ties}"`);
}


function resetToastNotification() {
    var Notification = document.getElementById('resetToastMessage');
    Notification.style.visibility = "visible";
    setTimeout(function () {
        Notification.style.visibility = "hidden";
    }, 2500);
}