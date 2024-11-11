
function show_side_bar() {
    const element = document.getElementById("side-bar");
    element.classList.toggle("hidden");       
}

// Function to toggle the dropdown
function toggleNotifications() {
    const dropdown = document.getElementById("notificationDropdown");
    dropdown.classList.toggle("hidden");
}

function toggleAddProjects() {
    const dropdown = document.getElementById("projectsAddPrompt");
    dropdown.classList.toggle("hidden");
}

// function toggleSearchBar() {
//     const dropdown = document.getElementById("searchbar");
//     dropdown.classList.toggle("hidden");
// }

function annulerAddProject() {
    const dropdown = document.getElementById("projectsAddPrompt");
    dropdown.classList.add("hidden");
}

// Close dropdown if clicking outside of it
document.addEventListener("click", function(event) {
    const dropdown = document.getElementById("notificationDropdown");
    const notificationButton = document.querySelector("#notifications");

    // Check if the click was outside the dropdown and the button
    if (!dropdown.contains(event.target) && !notificationButton.contains(event.target)) {
        dropdown.classList.add("hidden");
    }
});

// Close dropdown when Escape key is pressed
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        const dropdown = document.getElementById("notificationDropdown");
        if (!dropdown.classList.contains("hidden")) {
            dropdown.classList.add("hidden");
        }
    }
});

function toggleProfil() {
    const dropdown = document.getElementById("profilDropdown");
    dropdown.classList.toggle("hidden");
}

document.addEventListener("click", function(event) {
    const dropdown = document.getElementById("profilDropdown");
    const notificationButton = document.querySelector("#profil");

    // Check if the click was outside the dropdown and the button
    if (!dropdown.contains(event.target) && !notificationButton.contains(event.target)) {
        dropdown.classList.add("hidden");
    }
});

// Close dropdown when Escape key is pressed
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        const dropdown = document.getElementById("profilDropdown");
        if (!dropdown.classList.contains("hidden")) {
            dropdown.classList.add("hidden");
        }
    }
});

function toggleAddMembers() {
    const dropdown = document.getElementById("membersAddPrompt");
    dropdown.classList.toggle("hidden");
}

function annulerAddMembers() {
    const dropdown = document.getElementById("membersAddPrompt");
    dropdown.classList.add("hidden");
}

const fileInput = document.getElementById("projectImage");
const fileNameDisplay = document.getElementById("fileName");

fileInput.addEventListener("change", () => {
    fileNameDisplay.textContent = fileInput.files.length > 0 ? fileInput.files[0].name : "Aucun fichier n’a été sélectionné";
});