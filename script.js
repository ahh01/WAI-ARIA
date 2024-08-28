document.addEventListener("DOMContentLoaded", function () {
  const openModal = document.getElementById("openModal");
  const accessibleModal = document.getElementById("accessibleModal");
  const closeModalBtn = document.getElementById("closeModalBtn");

  function toggleModal(show) {
    
    if (show) { 
      accessibleModal.style.display = "block";
      closeModalBtn.focus();
      document.addEventListener("keydown", escCloseHandler);
    } else {
      accessibleModal.style.display = "none";
      openModal.focus();
      document.removeEventListener("keydown", escCloseHandler);
    }
  }

  function escCloseHandler(event) {
    if (event.key === "Escape") {
      toggleModal(false);
    }
  }

  openModal.addEventListener("click", () => toggleModal(true));
  closeModalBtn.addEventListener("click", () => toggleModal(false));

// Dialog functionality

const openDialog = document.getElementById("openDialog");
const accessibleDialog = document.getElementById("accessibleDialog");
const closeDialogBtn = document.getElementById("closeDialogBtn");

openDialog.addEventListener("click", function () {
  accessibleDialog.showModal(); // Visar dialogen
  closeDialogBtn.focus(); // Sätter fokus på stängknappen
  document.addEventListener("keydown", escCloseHandler); // Lägg till hanterare för Escape-tangenten
});

closeDialogBtn.addEventListener("click", function () {
  accessibleDialog.close(); // Stänger dialogen
  openDialog.focus(); // Återställer fokus till öppna-knappen
  document.removeEventListener("keydown", escCloseHandler); // Ta bort Escape-hanteraren
});

accessibleDialog.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    accessibleDialog.close();
    openDialog.focus();
  }
});

var menuButton = document.getElementById("menuButton");
var menuContent = document.getElementById("menuContent");

menuButton.addEventListener("click", function () {
  // Kontrollera om menyinnehållet är dolt
  if (menuContent.hidden) {
    menuContent.hidden = false; // Visa menyn
    menuButton.setAttribute("aria-expanded", "true");
    menuContent.setAttribute("aria-hidden", "false");
    menuContent.querySelector('a').focus();
  } else {
    menuContent.hidden = true; // Dölj menyn
    menuButton.setAttribute("aria-expanded", "false");
    menuContent.setAttribute("aria-hidden", "true");
    menuButton.focus();
  }
});

menuContent.hidden = true;
menuButton.setAttribute("aria-expanded", "false");
menuContent.setAttribute("aria-hidden", "true");

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !menuContent.hidden) {
    menuButton.click(); // Anropa klickhändelsen för att stänga menyn
  }
});
});