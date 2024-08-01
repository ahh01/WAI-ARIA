var openModal = document.getElementById("openModal");
var accessibleModal = document.getElementById("accessibleModal");
var closeModalBtn = document.getElementById("closeModalBtn");

openModal.addEventListener("click", function () {
  accessibleModal.hidden = false;
  closeModalBtn.focus();
  document.addEventListener("keydown", escCloseHandler); 
});

closeModalBtn.addEventListener("click", function () {
  accessibleModal.hidden = true;
  openModal.focus();
  document.removeEventListener("keydown", escCloseHandler);
});

function escCloseHandler(event) {
  if (event.key === "Escape") {
    accessibleModal.hidden = true;
    openModal.focus(); 
    document.removeEventListener("keydown", escCloseHandler);
  }
}

// Dialog functionality
var openDialog = document.getElementById("openDialog");
var accessibleDialog = document.getElementById("accessibleDialog");
var closeDialogBtn = document.getElementById("closeDialogBtn");

openDialog.addEventListener("click", function () {
  accessibleDialog.showModal();
  closeDialogBtn.focus();
});

closeDialogBtn.addEventListener("click", function () {
  accessibleDialog.close();
  openDialog.focus();
});

accessibleDialog.addEventListener("keydown", function(event) {
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
  } else {
    menuContent.hidden = true; // Dölj menyn
    menuButton.setAttribute("aria-expanded", "false"); 
    menuContent.setAttribute("aria-hidden", "true"); 
  }
});


menuContent.hidden = true;
menuButton.setAttribute("aria-expanded", "false");
menuContent.setAttribute("aria-hidden", "true");
