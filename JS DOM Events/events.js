// Way 02 to add event listener
function makeRed() {
    document.body.style.backgroundColor = "red";
}

// Way 03 to add event listener

const makeBlueButton = document.getElementById('makeBlue');

makeBlueButton.onclick = makeBlue; // we won't add parenthesis here because the function will be called automatically when the page is open

function makeBlue() {
    document.body.style.backgroundColor = "blue";
}

// Way 03(another) to add event handling --> [We will use sometimes]
document.getElementById("makeGreen").onclick = function () {
    document.body.style.backgroundColor = "green";
};

// Way 04 to add event handling
const makePinkButton = document.getElementById("makePink");
makePinkButton.addEventListener("click", function makePink() {
    document.body.style.backgroundColor = "pink";
});

// Way 04(another) to add event handling
const makePinkBtn = document.getElementById("makePink");
makePinkButton.addEventListener("click", makePink);

function makePink() {
    document.body.style.backgroundColor = "pink";
}

// Way 04 ---> Final [We will use mostly]

document.getElementById("makeOrange").addEventListener("click", function () {
    document.body.style.backgroundColor = "orange";
});