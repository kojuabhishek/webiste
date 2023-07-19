function toggleAddressFields(show) {
  var additionalFields = document.getElementById("additional-fields");
  additionalFields.style.display = show ? "block" : "none";
}

function showDetails() {
  document.getElementById("secondRow").style.display = "flex";
  document.getElementById("thirdRow").style.display = "flex";
}

function hideDetails() {
  document.getElementById("secondRow").style.display = "none";
  document.getElementById("thirdRow").style.display = "none";
}

// Execute showDetails() on page load if the "Yes" button is initially selected
window.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.querySelector('input[name="nrn"][value="yes"]');
  if (yesButton.checked) {
    showDetails();
  }
});

function showDetailsOccupation() {
  document.getElementById("secondRowOccupation").style.display = "flex";
}

function hideDetailsOccupation() {
  document.getElementById("secondRowOccupation").style.display = "none";
}

// Execute showDetails() on page load if the "Yes" button is initially selected
window.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.querySelector(
    'input[name="invloved"][value="yes"]'
  );
  if (yesButton.checked) {
    showDetailsOccupation();
  }
});
