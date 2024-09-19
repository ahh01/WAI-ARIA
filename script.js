// --- Modalfönster utan dialog ---
const openModal = document.getElementById("accessibleModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Öppna modalfönstret
openModalBtn.addEventListener("click", () => {
  openModal.setAttribute("aria-hidden", "false");
  openModal.style.display = "block";
  closeModalBtn.focus(); // Sätt fokus på stängknappen
});

// Stäng modalfönstret
function closeModal() {
  openModal.setAttribute("aria-hidden", "true");
  openModal.style.display = "none";
  openModalBtn.focus(); // Återställ fokus till öppna-knappen
}

closeModalBtn.addEventListener("click", closeModal);

// Stäng modalfönstret med ESC-knappen
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && openModal.getAttribute("aria-hidden") === "false") {
    closeModal();
  }
});

// --- Modalfönster med <dialog> ---
const dialog = document.getElementById("accessibleDialog");
const openDialogBtn = document.getElementById("openDialogBtn");
const closeDialogBtnInDialog = document.getElementById("closeDialogBtn");

// Öppna dialog
openDialogBtn.addEventListener("click", () => {
  dialog.showModal();
  closeDialogBtnInDialog.focus(); // Sätt fokus på stängknappen
});

// Stäng dialog
closeDialogBtnInDialog.addEventListener("click", () => {
  dialog.close();
  openDialogBtn.focus(); // Återställ fokus till öppna-knappen
});

// Stäng dialog med ESC-knappen
dialog.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    dialog.close();
    openDialogBtn.focus(); // Återställ fokus till öppna-knappen
  }
});

// --- Hamburgarmeny ---
const menuButton = document.getElementById("menuButton");
const menuContent = document.getElementById("menuContent");

// Öppna/stäng menyn
menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  toggleMenu(!isExpanded);
});

// Funktion för att öppna/stänga menyn
function toggleMenu(isOpen) {
  menuButton.setAttribute("aria-expanded", isOpen);
  menuContent.setAttribute("aria-hidden", !isOpen);
  menuContent.style.display = isOpen ? "block" : "none";
}

// Stäng hamburgarmenyn med ESC-knappen
window.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    toggleMenu(false); // Stäng menyn om den är öppen
  }
});

   /*  <dialog> är ett HTML-element som underlättar skapandet av tillgängliga modalfönster.
    fördelarna är:

    Automatisk fokus: När en <dialog> öppnas, flyttas fokus till det första fokuserbara elementet inom dialogen och återställs till det ursprungliga elementet vid stängning. 
    Detta underlättar navigering för tangentbords- och skärmläsaranvändare.

    Inbyggda ARIA-roller: <dialog> tillämpar automatiskt rätt ARIA-roller, vilket hjälper skärmläsare att identifiera att det är en modal.

    Standardiserad stängning: Dialogen kan stängas med close(), vilket förenklar hanteringen av stängning och fokus.

    Escape-knapp stöd: <dialog> stödjer automatiskt stängning med Escape-tangenten, vilket förbättrar användbarheten för tangentbordsanvändare.  */