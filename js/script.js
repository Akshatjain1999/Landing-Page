const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".signUpModal");
    closeModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".signUpModal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) {
    return;
  }
  modal.classList.add("active");
  overlay.classList.add("active");
}
function closeModal(modal) {
  if (modal == null) {
    return;
  }
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

function userSignUp() {
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const phoneNumber = document.getElementById("phonenumber");
  if (!username.checkValidity()) {
    alert("Invalid username\n Username should be 3-15 character long");
  } else if (!email.checkValidity()) {
    alert("Invalid Email ID");
  } else if (!phoneNumber.checkValidity()) {
    alert("Invalid Phone Number \nPlease provide in +91 XXXXXXXXXX format");
  } else {
    alert("Signed up successfully");
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phonenumber").value = "";
  }
}
