// main.js
// This is the only JavaScript on the site. It controls the "Menu" button on phones.
//
// How it works:
//   - On phones, the navigation links are hidden until someone presses "Menu".
//   - Pressing the button adds the class "is-open" to the nav, and the CSS shows it.
//   - aria-expanded tells screen readers whether the menu is open ("true") or closed ("false").
//   - Pressing the Escape key closes the menu.
//   - On wider screens, the CSS always shows the links and hides the button, so this does nothing.

const menuButton = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");

function setMenuOpen(isOpen) {
  menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  nav.classList.toggle("is-open", isOpen);
}

if (menuButton && nav) {
  // Open or close the menu when the button is clicked (or pressed with Enter/Space).
  menuButton.addEventListener("click", function () {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  // Close the menu with the Escape key and put keyboard focus back on the button.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });
}
