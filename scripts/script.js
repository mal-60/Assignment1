const sideBar = document.querySelector(".sidebar");
const blueButton = document.querySelector(".blue-theme");
const darkButton = document.querySelector(".dark-theme");
const textArea = document.querySelector("#story");
// const saveCancel = document.querySelector(".save-cancel");
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
    pinkButton.classList.toggle("dimPinkButton");
    footText.classList.toggle("dimFooter");
}
darkButton.addEventListener("click", darkMode);


function hideTextAndBtn () {
    pinkButton.classList.add("clearTextBtn");
}
pinkButton.addEventListener("click", hideTextAndBtn);