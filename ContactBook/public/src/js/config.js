let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey();

function checkApiKey() {
    if (!localStorage.getItem("apiKey")) {
        window.location.href = "enter-api-key.html";
        return null;
    }
    return localStorage.getItem("apiKey");
}

function redirectToContacts() {
    window.location.href = "contacts.html";
}

// debug check
console.log("Config.js loaded");
console.log("Root path:", rootPath);
console.log("API Key:", "**hidden**");