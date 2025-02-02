async function addTask() {
    const title = document.getElementById("taskTitle").value;
    await fetch('http://localhost:5000/task', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, completed: false })
    });
    loadTasks();
}

async function loadTasks() {
    const response = await fetch('http://localhost:5000/tasks');
    const tasks = await response.json();
    document.getElementById("tasks").innerHTML = tasks.map(t => `<li>${t.title}</li>`).join("");
}

async function sendMessage() {
    const message = document.getElementById("chatMessage").value;
    await fetch('http://localhost:5000/chat', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, sender: "User" })
    });
    loadChat();
}

async function loadChat() {
    const response = await fetch('http://localhost:5000/chat');
    const chats = await response.json();
    document.getElementById("chat").innerHTML = chats.map(c => `<li>${c.sender}: ${c.message}</li>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
    loadChat();
});
