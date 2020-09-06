function activateHamburgerMenu() {
    const hamburgerMenu = document.getElementsByClassName("landing-page-navigation-container")[0];

    const hamburgerLines = document.getElementsByClassName("landing-page-hamburger-lines");


    const hamburgerButton = document.getElementsByClassName("landing-page-hamburger-icon")[0];

    hamburgerButton.addEventListener("click", (event) => {
        hamburgerMenu.classList.toggle("hamburger-open");
        colorHamburgerButton(hamburgerLines);



    });
}

function colorHamburgerButton(hamburgerLines) {
    for (let i = 0; i < hamburgerLines.length; i++) {
        hamburgerLines[i].classList.toggle("hamburger-open-indicate");
    }

}

activateHamburgerMenu();