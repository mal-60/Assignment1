const sideBar = document.querySelector(".sidebar");
const blueButton = document.querySelector(".blue-theme");
const darkButton = document.querySelector(".dark-theme");
const textArea = document.querySelector("#story");
// const saveCancel = document.querySelector(".save-cancel");
const navyButton = document.querySelector(".navy-theme");
const pinkButton = document.querySelector(".pink-theme");
const footText = document.querySelector(".footer-text");


function textChange () {
    if (darkButton.textContent === "Dark Theme") {
        darkButton.textContent = "Light Theme";
    }
    else if (darkButton.textContent === "Light Theme") {
        darkButton.textContent = "Dark Theme";
    }
}
darkButton.addEventListener("click", textChange);


function darkMode () {
    document.body.classList.toggle("dark");
    sideBar.classList.toggle("dimSideBar");
    blueButton.classList.toggle("dimBlueButton");
    darkButton.classList.toggle("dimDarkButton");
    textArea.classList.toggle("dimTextArea");
    navyButton.classList.toggle("dimNavyButton");
    pinkButton.classList.toggle("dimPinkButton");
    footText.classList.toggle("dimFooter");
}
darkButton.addEventListener("click", darkMode);


function hideTextAndBtn () {
    pinkButton.classList.add("clearTextBtn");
    navyButton.classList.add("clearTextBtn");
    textArea.classList.add("clearTextBtn");
}
pinkButton.classList.toggle("clearTextBtn");
navyButton.classList.toggle("clearTextBtn");
textArea.classList.toggle("clearTextBtn");


pinkButton.addEventListener("click", hideTextAndBtn);