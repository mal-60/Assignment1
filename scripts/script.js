const sideBar = document.querySelector(".sidebar");
const blueButton = document.querySelector(".blue-theme");
const darkButton = document.querySelector(".dark-theme");
const textArea = document.querySelector("#story");
const footerText = document.querySelector("h3");
const navyButton = document.querySelector(".navy-theme");
const pinkButton = document.querySelector(".pink-theme");
const footText = document.querySelector("#footer-text");
const imageLogos = document.querySelectorAll("img");


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
    footerText.classList.toggle("dimFooter");

    for (let image of imageLogos) {
        image.classList.toggle("imgDark");
    };
}
darkButton.addEventListener("click", darkMode);

// hides the textarea and button after clicking cancel button
function hideTextAndBtn () {
    pinkButton.classList.toggle("clearTextBtn");
    navyButton.classList.toggle("clearTextBtn");
    textArea.classList.toggle("clearTextBtn");
}
pinkButton.addEventListener("click", hideTextAndBtn);


// returns the text and button after clicking new note
function returnTextAndBtn () {
    if (navyButton.classList.contains("clearTextBtn")) 
    {
        hideTextAndBtn ()
    }
    else {
        textArea.value = "";
    }
}
blueButton.addEventListener("click", returnTextAndBtn);

function clearTextArea () {
    
}