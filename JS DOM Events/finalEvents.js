// Final DOM Event Handler

// Option : 01
function handleOnClick() {
    const handlerStatus = document.getElementById("handler-status");
    handlerStatus.innerText = "The Button is clicked by onClick Button!";
    handlerStatus.style.color = "red";
}

// Option : 02
document.getElementById("event-listener-button").addEventListener("click", function () {
    const handlerStatus = document.getElementById("handler-status");
    handlerStatus.innerText = "The Button is clicked by Event Listener Button!";
    handlerStatus.style.color = "blue";
});

// Option : 02 (recap)

 document.getElementById('btn-update').addEventListener('click', function() {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const inputTextDisplay = document.getElementById('input-text-display');
    inputTextDisplay.innerText = inputText;
    inputTextDisplay.style.color = 'red';
    inputField.value = '';
})