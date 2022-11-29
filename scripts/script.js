const sideBar = document.querySelector(".sidebar");
const betterNotes = document.querySelector(".better-notes");
const blueButton = document.querySelector(".blue-theme")
const darkButton = document.querySelector(".dark-theme");
const saveCancel = document.querySelector(".save-cancel");
const pinkButton = document.querySelector(".pink-theme");


function darkButton()
{
    darkButton.classList.toggle("dark");
}

darkButton.addEventListener("click", darkButton);