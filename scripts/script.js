const sideBar = document.querySelector(".sidebar");
const betterNotes = document.querySelector(".better-notes");
const blueButton = document.querySelector(".blue-theme");
const darkButton = document.querySelector(".dark-theme");
const saveCancel = document.querySelector(".save-cancel");
const pinkButton = document.querySelector(".pink-theme");


function textChange () {
    if (darkButton.textContent === "Dark Theme") {
        darkButton.textContent = "Light Theme";
    }
    else if (darkButton.textContent === "Light Theme") {
        darkButton.textContent = "Dark Theme";
    }
}
darkButton.addEventListener("click", textChange);

// darkButton.classList.toggle("dark");