const input = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const messages = document.getElementById("messages");
const newChat = document.getElementById("newChat");


function addMessage(text, type) {

    const message = document.createElement("div");

    message.className = "message " + type;

    message.textContent = text;

    messages.appendChild(message);

    messages.scrollTop = messages.scrollHeight;
}


function sendMessage() {

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    addMessage(text, "user");

    input.value = "";


    // Temporary response.
    // Later we will replace this with Ollama.

    setTimeout(function() {

        addMessage(
            "Hello! I am MY-FRIEND. My Ollama AI brain will be connected next.",
            "ai"
        );

    }, 500);
}


sendButton.addEventListener("click", sendMessage);


input.addEventListener("keydown", function(event) {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        sendMessage();
    }
});


newChat.addEventListener("click", function() {

    messages.innerHTML = "";

    input.focus();

});