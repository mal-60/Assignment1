const sideBar = document.querySelector(".sidebar");
const sideBarList = document.querySelector(".sidebar-list");
const blueButton = document.querySelector(".blue-theme");
const darkButton = document.querySelector(".dark-theme");
const textArea = document.querySelector("#story");
const footerText = document.querySelector("h3");
const navyButton = document.querySelector(".navy-theme");
const pinkButton = document.querySelector(".pink-theme");
const footText = document.querySelector("#footer-text");
const imageLogos = document.querySelectorAll("img");

const notesArray = [
    {title: "note one", body: "this is my first note"},
    {title: "note two", body: "this is my second note"}
];

// change text of dark theme button to light theme and back
function textChange () {
    if (darkButton.textContent === "Dark Theme") {
        darkButton.textContent = "Light Theme";
    }
    else if (darkButton.textContent === "Light Theme") {
        darkButton.textContent = "Dark Theme";
    }
}
darkButton.addEventListener("click", textChange);


// change to dark mode with click of dark theme button and toggle
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



// saves text and adds title
function saveText () {
    let input = ""
    input = prompt("What is the title of the note?");
    notesArray.push(
        {
            title: input,
            body: textArea.value
        }
    )
    const listItem = document.createElement("li");
    listItem.textContent = input;
    sideBarList.appendChild(listItem);
}
navyButton.addEventListener("click", saveText);


// displays the notes by clicking title
function displayText (event) {
    for (let note of notesArray) {
        if (note.title == event.target.textContent) {
            textArea.value = note.body;
        }
    }
}
sideBar.addEventListener("click", displayText);
