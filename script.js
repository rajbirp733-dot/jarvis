async function sendMessage() {
    const input = document.getElementById("userInput").value;
    const chat = document.getElementById("chat");

    chat.innerHTML += "<p><b>You:</b> " + input + "</p>";

    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer sk-14a1830e9c124b04b9ebd85da53af78d"
        },
        body: JSON.stringify({
            model: "deepseek-chat",
            messages: [
                { role: "user", content: input }
            ]
        })
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;

    chat.innerHTML += "<p><b>Jarvis:</b> " + reply + "</p>";
}
