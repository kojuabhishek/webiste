function showDetailsHighRank() {
  document.getElementById("secondRowHighRank").style.display = "flex";
}

function hideDetailsHighRank() {
  document.getElementById("secondRowHighRank").style.display = "none";
}

// Execute showDetails() on page load if the "Yes" button is initially selected
window.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.querySelector(
    'input[name="related"][value="yes"]'
  );
  if (yesButton.checked) {
    showDetailsHighRank();
  }
});

function showDetailsBeneficiary() {
  document.getElementById("thirdRowBeneficiary").style.display = "flex";
}

function hideDetailsBeneficiary() {
  document.getElementById("thirdRowBeneficiary").style.display = "none";
}

// Execute showDetails() on page load if the "Yes" button is initially selected
window.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.querySelector(
    'input[name="beneficiary"][value="yes"]'
  );
  if (yesButton.checked) {
    showDetailsHighRank();
  }
});

function showDetailsFelony() {
  document.getElementById("fourthRowFelony").style.display = "flex";
}

function hideDetailsFelony() {
  document.getElementById("fourthRowFelony").style.display = "none";
}

// Execute showDetails() on page load if the "Yes" button is initially selected
window.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.querySelector('input[name="felony"][value="yes"]');
  if (yesButton.checked) {
    showDetailsHighRank();
  }
});
